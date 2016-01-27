/**
 * http://usejsdoc.org/
 */
var fs = require("fs");
fs.readFile("../README.md", function(err, data) {
	if (err) {
		return console.error(err);
	}
	console.log("异步读取：" + data.toString());
});

var data = fs.readFileSync("../README.md");
console.log("同步读取：" + data);
console.log("程序执行完毕。");