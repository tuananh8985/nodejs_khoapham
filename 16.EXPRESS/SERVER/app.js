var express  = require("express");
var app = express();
var server = require("http").createServer(app);
server.listen(3000);

app.get('/',function(req,res){
    res.send("<font color = red>HELLO WORD</font>");//Đây là send text
})
app.get('/sendfile',function(req,res){
    res.sendFile(__dirname+"/index.html");//Đây là send text
})

app.get('/tinhtong/:so1/:so2',function(req,res){
    var n = req.params.so1;
    n = parseInt(n);
    var m =req.params.so2;
    m = parseInt(m);
    var tong = n + m;
    res.send("<h1>"+tong+"</h1>");
})