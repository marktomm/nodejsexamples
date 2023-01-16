var http = require('http');
var dt = require('./my_module.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! ' + dt.myDateTime());
}).listen(8080);

