
var http = require("http");
var fs = require("fs");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.createReadStream(__dirname + "/index.html").pipe(res);//Đọc nội dung từ trong file ra
    var data = fs.readFileSync(__dirname + "/index.html","utf-8");
}).listen(7777);