

var express = require('express');

var server = express();
var port = process.env.PORT || 8080;
var redirect_protocol = process.env.REDIRECT_PROTOCOL || 'https';
var redirect_domain = process.env.REDIRECT_DOMAIN || 'yourdomain.com';
var http = require('http');

server.get('*', function(request, response){ 
  response.redirect(301, redirect_protocol + '://' + redirect_domain + request.url);
});

http.createServer(server).listen(port);
