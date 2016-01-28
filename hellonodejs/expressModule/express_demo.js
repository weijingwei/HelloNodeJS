/**
 * http://usejsdoc.org/
 */

// 设置运行时环境变量，npm全局module根目录
// NODE_PATH=C:\Users\IBM_ADMIN\AppData\Roaming\npm\node_modules
var express = require('express');
var util = require('util');

var app = express();

app.get('/', function (req, res) {
	res.send('Hello World');
});

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);

});