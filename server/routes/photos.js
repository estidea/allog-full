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


// const DIR = './uploads/album-thumbs';
const DIR = './dist/uploads/album-thumbs';

var storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, DIR)
	},
	filename: function(req, file, callback) {
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

// POST new photos
router.post('/new', function (req, res) {
    let upload = multer({ storage: storage }).array("photo", 40);
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

// GET all photos
router.get('/show-all', (req, res, next) => {
    db.photos.find((err, photos) => {
        if(err){
            // res.send(err);
            sendError(err, res);
        }
        response.data = photos;
        res.json(response);
    })
});

module.exports = router;