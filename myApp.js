require('dotenv').config();
let express = require('express');
let app = express();


// Challenge 9 - Get Route Parameter Input from Client
app.get('/:word/echo', (req, res) => {
    res.json({
        echo: req.params.word
    })
})







module.exports = app;
