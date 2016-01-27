/**
 * http://usejsdoc.org/
 */
var fs = require("fs");
fs.readFile("input.txt", function(err, data) {
	if (err) {
		return console.error(err);
	}
	console.log("异步读取：" + data.toString());
});

var data = fs.readFileSync("input.txt");
console.log("同步读取：" + data);
console.log("程序执行完毕。");

fs.open("input.txt", "r+", function(err, fd) {
	if (err) {
		return console.error(err);
	}
	console.dir(fd);
});

console.log("准备打开文件！");
fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("读取文件信息成功！");
   
   // 检测文件类型
   console.log("是否为文件(isFile) ? " + stats.isFile());
   console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
});

console.log("准备写入文件");
fs.writeFile('output.txt', '我是通过写入的文件内容！',  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
   console.log("--------我是分割线-------------");
   console.log("读取写入的数据！");
   fs.readFile('output.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("异步读取写入文件数据: " + data.toString());
   });
});