var http = require('http');
var myFs = require('./my_file_module');

http.createServer(function (req, res) {
  myFs.myFileRead(function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
