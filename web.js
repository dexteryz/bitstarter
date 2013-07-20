var express = require('express');
var fs = require('fs');

var hello_txt = fs.readFileSync('index.html');
var hello_str = hello_txt.toString('utf-8');

var app = express.createServer(express.logger());
 
app.get('/', function(request, response) {
  response.send(hello_str);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
