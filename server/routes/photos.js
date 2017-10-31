const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const multer = require('multer');
const path = require('path');

const db = mongojs('mongodb://estidea:219592@ds111885.mlab.com:11885/allog', ['photos']);
// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

const albumsThumbsDIR = './dist/uploads/album-thumbs';

var storageForAlbumThumbs = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, albumsThumbsDIR) 
	},
	filename: function(req, file, callback) {
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

// POST new album thumbs
router.post('/new', function (req, res) {
    let upload = multer({ storage: storageForAlbumThumbs }).array("photo", 40);
    upload(req, res, function (err) {
        let photo = req.files;
        if (err) {
            sendError(err, res);
        }
        db.photos.save(photo, (err, task) => {
            if(err){
                sendError(err, res);
            }
            response.data = photo;
            res.json(response);
          });
        // Everything went fine
    })
});

// POST new photos in album
router.post('/new/:albumtitle', function (req, res) {
    let storageForPhotosInAlbums = multer.diskStorage({
        destination: function(req, file, callback) {
            let photoInAlbumsDIR = './dist/uploads/' + req.params.albumtitle;
            callback(null, photoInAlbumsDIR);  
        },
        filename: function(req, file, callback) {
            callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
    })
    let upload = multer({ storage: storageForPhotosInAlbums }).array("photo", 40);
    upload(req, res, function (err) {
        let photo = req.files;
        photo[0].albumtitle = req.params.albumtitle;
        if (err) {
            sendError(err, res);
        } /* ===================================================== */
        db.photos.save(photo, (err, task) => {
            if(err){
                sendError(err, res);
            }
            response.data = photo;
            res.json(response);
          });
        // Everything went fine
    })
});

// GET all photos from current album
router.get('/:album', (req, res, next) => {
    db.photos.find({ albumtitle: req.params.album }, (err, photos) => {
        if(err){
            // res.send(err);
            sendError(err, res);
        }
        response.data = photos;
        res.json(response);
    })
});


// Delete Photo 
router.delete('/:id', (req, res, next) => {
    db.photos.remove({_id: mongojs.ObjectId(req.params.id)},(err, photo) => {
        if(err){
          sendError(err, res);
        }
        response.data = photo;
        res.json(response);
    })
  });
  
  // Update Task
  router.patch('/tasks/:id', (req, res, next) => {
    let task = req.body;
    let updTask = {};
  
    if(task.isDone) {
      updTask.isDone = task.isDone;
    }
  
    if(task.title) {
      updTask.title = task.title;
    }
  
    if(!updTask){
      sendError(err, res);
    } else {
      db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask, {},(err, task) => {
        if(err){
            res.send(err);
        }
        response.data = task;
        res.json(response);
      });
    }
    
  });

module.exports = router;