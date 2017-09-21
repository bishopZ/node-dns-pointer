

var express = require('express');

var server = express();
var port = process.env.PORT || 8080;
var http = require('http');

server.get('*', function(request, response){ 
  response.redirect(301, 'https://yourdomain.com' + request.url);
});

http.createServer(server).listen(port);
