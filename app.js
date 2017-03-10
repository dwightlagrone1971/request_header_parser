var express = require('express');
var requestIp = require('request-ip');
var acceptLanguage = require('accept-language');
var useragent = require('useragent');

var app = express();

var port = process.env.PORT;

app.use(requestIp.mw());

var results = {};

app.use(function(req, res) {
    var ip = req.clientIp;
    acceptLanguage.languages(['en-US', 'zh-CN']);
    var lang = acceptLanguage.get('en-GB,en;q=0.8,sv');
    var agent = useragent.parse(req.headers['user-agent']);
     // 'Mac OSX 10.8.1' 
    
    results = {
        'ipaddres': ip,
        'language': lang,
        'software': agent.os.toString()
    };
    res.send(results);
});




app.get('/', function(req, res) {
    
  
});


app.listen(port, function() {
    console.log("Server is listening on port: " + port + "....."); 
});