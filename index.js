var express = require('express')
var app = express();
var port = process.env.PORT || 3000;
var User = require('./models/User');

app.get('/', (req, res) => {
    res.status(200).send(`Welcome to login and signup API`);
});

app.listen(port, ()=> {
    console.log(`Server is listening on ${port}`)
});