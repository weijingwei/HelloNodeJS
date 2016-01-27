/**
 * http://usejsdoc.org/
 */
var os = require("os");
var util = require("util");

// CPU 的字节序
console.log('endianness: ' + os.endianness());

// 操作系统名
console.log('type: ' + os.type());

// 操作系统名
console.log('platform: ' + os.platform());

// 系统内存总量
console.log('total memory: ' + os.totalmem() + " bytes.");

// 操作系统空闲内存量
console.log('free memory: ' + os.freemem() + " bytes.");

// 操作系统版本
console.log('release: ' + os.release() + " bytes.");

// 操作系统默认临时文件夹
console.log('release: ' + os.tmpdir() + " bytes.");

// CPU信息
os.cpus().forEach(function(elt, i) {
	console.log("cpu" + (i + 1) + ": " + util.inspect(elt));
});