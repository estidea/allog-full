const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');

const db = mongojs('mongodb://estidea:219592@ds111885.mlab.com:11885/allog', ['tasks']);

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
        
// GET all tasks
router.get('/tasks', (req, res, next) => {
    db.tasks.find((err, tasks) => {
        if(err){
            // res.send(err);
            sendError(err, res);
        }
        response.data = tasks;
        res.json(response);
    })
});

// Get single task
router.get('/tasks/:id', (req, res, next) => {
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},(err, task) => {
        if(err){
            sendError(err, res);
        }
        response.data = task;
        res.json(response);
        // res.json(task);
    })
});

// POST new task 

router.post('/tasks/newtask', (req, res, next) => {
  let task = req.body;
    if(!task.title) {
      res.send("There is not title!");
    } else {
      db.tasks.save(task, (err, task) => {
        if(err){
          sendError(err, res);
        }
        response.data = task;
        res.json(response);
      })
    }
});

// Delete Task 
router.delete('/tasks/:id', (req, res, next) => {
  db.tasks.remove({_id: mongojs.ObjectId(req.params.id)},(err, task) => {
      if(err){
        sendError(err, res);
      }
      response.data = task;
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