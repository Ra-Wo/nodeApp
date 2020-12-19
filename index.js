const http = require("http");
var PORT = '5000'

http.createServer((req, res)=> {

     res.writeHead(200);
     res.write("hello world");
     res.end();

}).listen(PORT);
