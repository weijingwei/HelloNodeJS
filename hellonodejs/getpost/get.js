/**
 * http://usejsdoc.org/
 */
var http = require('http');
var url = require('url');
var util = require('util');

// URL: http://localhost:3000/user?name=w3c&email=w3c@w3cschool.cc
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);