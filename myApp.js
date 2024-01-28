require('dotenv').config();
let express = require('express');
let app = express();


// Challenge 10 - Get Query Parameter Input from Client
app.get('/name', (req, res) => {
    let firstname = req.query.first;
    let lastname = req.query.last;
    res.json({
        name: firstname + ' ' + lastname,
    });
})

// V2
// app.route('/name')
//     .get((req, res) => {
//         let firstname = req.query.first;
//         let lastname = req.query.last;
//         res.json({
//             name: firstname + ' ' + lastname
//         });
//     })
//     .post((req, res) => {
//         //...
//     })







module.exports = app;
