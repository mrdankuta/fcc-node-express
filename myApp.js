require('dotenv').config();
let express = require('express');
let app = express();


// Challenge 8
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({
        time: req.time
    })
})






module.exports = app;
