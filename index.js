const http = require("http");
const fs = require('fs');
const url = require("url");
const slugify = require("slugify");


http.createServer((req, res)=> {

     res.writeHead(200);
     res.write("hello world");
     res.end();

}).listen(8080,'127.0.0.1', (err)=>{
     if(err) console.log(err);
});