var express = require('express');

var app = express();

var port = process.env.PORT;

app.get('/', function(req, res) {
    res.send("This is the first web app");
});


app.listen(port, function() {
    console.log("Server is listening on port: " + port + "....."); 
});