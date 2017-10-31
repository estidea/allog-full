const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const multer = require('multer');
const path = require('path');
const fs=require('fs');
const rimraf = require('rimraf');

const db = mongojs('mongodb://estidea:219592@ds111885.mlab.com:11885/allog', ['albums', 'photos']);
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

// Delete Album 
router.put('/:id', (req, res, next) => {
    let album = req.body;
    let dirname = DIR + album.title;
    db.albums.remove({_id: mongojs.ObjectId(req.params.id)},(err, album) => {
        if(err){
            sendError(err, res);
        }
        if (fs.existsSync(dirname)){ 
            fs.rmdirSync(dirname);
        }  
        response.data = album;
        res.json(response);
    });
});

// Update Album
router.patch('/:id', (req, res, next) => {
  let album = req.body;
  let updAlbum = {};
  updAlbum.title = album.title;
  updAlbum.description = album.description;
  updAlbum.thumb = album.thumb;
  let oldTitle = album.oldTitle;
  let oldDirname = DIR + album.oldTitle; 
  let newDirname = DIR + album.title;
  // let filename = album.filename;
  
  db.albums.update({_id: mongojs.ObjectId(req.params.id)}, updAlbum, (err, album) => {
    if(err){
        res.send(err);
    }
    if (fs.existsSync(oldDirname)){ 
      fs.rename(oldDirname, newDirname, (err) => {
          if (err) throw err;
          console.log('renamed complete');
      });
    };  
    db.photos.update(
      { "albumtitle": oldTitle }, 
      { $set: { "albumtitle": updAlbum.title, "destination": newDirname } }, 
      { multi: true }
    ); 
    response.data = album;
    res.json(response);
  });

});

module.exports = router;