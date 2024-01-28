require('dotenv').config();
let bodyParser = require('body-parser')
let express = require('express');
let app = express();


app.use(bodyParser.urlencoded({ extended: false }));






module.exports = app;
