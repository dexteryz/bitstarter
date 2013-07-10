var express = require('express');

var app = express.createServer(express.logger());

var hello_txt = fs.readFileSync('index.html');
var hello_str = hello_txt.toString('utf-8');

app.get('/', function(request, response) {
  response.send(hello_str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
