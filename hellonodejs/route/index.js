/**
 * http://usejsdoc.org/
 */
var route = require("./router");
var server = require("./server");
console.trace("index");
server.start(route.route);