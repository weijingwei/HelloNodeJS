/**
 * http://usejsdoc.org/
 */
process.on("exit", function(code) {
	console.dir(process);
	process.argv.forEach(function(val, index, array) {
		   console.log(index + ': ' + val);
	});
	console.log(process.memoryUsage());
});