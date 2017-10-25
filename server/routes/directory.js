const express = require('express');
const router = express.Router();
const fs=require('fs');

router.post('/', (req, res, next) => {
    let dirname = 'uploads/' + req.body.dirname;
    if (!fs.existsSync(dirname)){
        fs.mkdirSync(dirname);
    }
    res.send('successful created!');
});

router.delete('/:dirname', (req, res, next) => {
    let dirname = 'uploads/' + req.params.dirname;
    if (!fs.existsSync(dirname)){
        res.send('directory doesnt exist!');
    }
    fs.rmdirSync(dirname);
    res.send('successful deleted!');
});

router.patch('/:dirname', (req, res, next) => {
    let dirname = 'uploads/' + req.params.dirname;
    let newname = 'uploads/' + req.body.newname;
    if (!fs.existsSync(dirname)){
        res.send('directory doesnt exist!');
    }
    fs.renameSync(dirname, newname);
    res.send('successful renamed!');
});

module.exports = router;