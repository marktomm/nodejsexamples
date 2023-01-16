const http = require('http');

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

setTimeout(() => {
  console.log("settimeout fire");
}, 5000);

server.listen(8080);
console.log("hello");