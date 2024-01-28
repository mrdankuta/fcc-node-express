require('dotenv').config();
let express = require('express');
let app = express();


// Challenge 7
app.use((req, res, next) => {
    console.log(req.method, req.path, "-", req.ip);
    next();
})




module.exports = app;
