

var express = require('express');

var server = express();

server.get('*', function(req, res){ 
  res.redirect(301, 'https://yourdomain.com' + req.url);
});
