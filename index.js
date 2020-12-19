const http = require("http");

http.createServer((req, res)=> {

     res.writeHead(200);
     res.write("hello world");
     res.end();

}).listen(const port = Process.env.PORT || 3000 ;);
