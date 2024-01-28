require('dotenv').config();
let express = require('express');
let app = express();


// Challenge 10 - Get Query Parameter Input from Client
// app.get('/name', (req, res) => {
//     let fullname = req.query.first + ' ' + req.query.last;
//     res.json({
//         name: fullname
//     });
// })

// V2
app.route('/name')
    .get((req, res) => {
        let fullname = req.query.first + ' ' + req.query.last;
        res.json({
            name: fullname
        });
    })
    .post((req, res) => {
        //...
    })







module.exports = app;
