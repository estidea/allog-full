const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const multer = require('multer');
const path = require('path');
const fs=require('fs');

const db = mongojs('mongodb://estidea:219592@ds111885.mlab.com:11885/allog', ['albums']);
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

const DIR = './dist/uploads/';

// GET all albums
router.get('/', (req, res, next) => {
    db.albums.find((err, albums) => {
        if(err){
            sendError(err, res);
        }
        response.data = albums;
        res.json(response);
    })
});

// Get single album
router.get('/:title', (req, res, next) => {
    db.albums.findOne({title: req.params.title},(err, album) => {
        if(err){
            sendError(err, res);
        }
        response.data = album;
        res.json(response);
    })
});

// POST new album 

router.post('/', (req, res, next) => {
    let album = req.body;
    let dirname = DIR + album.title;
    if (!fs.existsSync(dirname)){ // create directory with name of album title
        fs.mkdirSync(dirname);
    }  
    if(!album.title) {
      res.send("There is not title!");
    } else if (!album.description) {
        res.send("There is no description!");
    } else {
      db.albums.save(album, (err, album) => {
        if(err){
          sendError(err, res);
        }
        response.data = album;
        res.json(response);
      })
    }
});

// // Delete Task 
// router.delete('/tasks/:id', (req, res, next) => {
//   db.tasks.remove({_id: mongojs.ObjectId(req.params.id)},(err, task) => {
//       if(err){
//         sendError(err, res);
//       }
//       response.data = task;
//       res.json(response);
//   })
// });

// // Update Task
// router.patch('/tasks/:id', (req, res, next) => {
//   let task = req.body;
//   let updTask = {};

//   if(task.isDone) {
//     updTask.isDone = task.isDone;
//   }

//   if(task.title) {
//     updTask.title = task.title;
//   }

//   if(!updTask){
//     sendError(err, res);
//   } else {
//     db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask, {},(err, task) => {
//       if(err){
//           res.send(err);
//       }
//       response.data = task;
//       res.json(response);
//     });
//   }
  
// });

module.exports = router;