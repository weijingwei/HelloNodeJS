/**
 * http://usejsdoc.org/
 */
var url = require("url");
var http = require("http");

function start (route) {
	function onRequest(request, response) {
		console.trace("server");
		var pathName = url.parse(request.url).pathname;
		route(pathName);
		response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write("Hello World");
	    response.end();
	}
	
	http.createServer(onRequest).listen(80);
	console.log("Server has started.");
}

exports.start = start;