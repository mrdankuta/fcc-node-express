let express = require('express');
let app = express();



// Challenge 3
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
})














module.exports = app;
