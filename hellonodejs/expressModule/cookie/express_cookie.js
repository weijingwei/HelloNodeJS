/**
 * http://usejsdoc.org/
 */
// express_cookie.js 文件
var express      = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
var index = 0;
app.get('/', function(req, res) {
  console.log("Cookies: ", req.cookies);
  res.cookie("name", "zhangsan" + index++);
  res.end(JSON.stringify(req.cookies));
});

app.listen(8081);

// http://127.0.0.1:8081