require('dotenv').config();
let bodyParser = require('body-parser')
let express = require('express');
let app = express();

// Challenge 12
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.post('/name', (req, res) => {
    let firstname = req.body.first;
    let lastname = req.body.last;
    res.json({
        name: firstname + ' ' + lastname
    })
})




module.exports = app;
