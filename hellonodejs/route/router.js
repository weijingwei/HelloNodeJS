/**
 * http://usejsdoc.org/
 */
function route (pathName) {
	console.trace("route");
	console.log("About to route a request for " + pathName);
}

exports.route = route;