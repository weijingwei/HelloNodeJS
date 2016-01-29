/**
 * http://usejsdoc.org/
 */
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/index.html', function (req, res) {
   res.sendFile(__dirname + "/" + "index.html" );
});

app.post('/file_uploads', function (req, res) {
	req.files.forEach(function(elt, i) {
		console.log(elt);  // 上传的文件信息
		var des_file = __dirname + "/" + elt.originalname;
		console.log(des_file);
		fs.readFile(elt.path, function (err, data) {
	        fs.writeFile(des_file, data, function (err) {
	        	var response = {};
	        	if( err ){
	        		console.log(err);
	        	}else{
	        		response = {
	        				message:'File uploaded successfully', 
	        				filename:elt.originalname
	        		};
	        	}
	        	console.log( response );
	        	res.end(JSON.stringify( response ) );
	       });
		});
	});
});

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);

});