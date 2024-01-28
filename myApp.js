let express = require('express');
let app = express();


// Challenge 5
app.get('/json', (req, res) => {
    res.json({
        "message": "Hello json"
    })
})








module.exports = app;
