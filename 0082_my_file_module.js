var fs = require('fs');

exports.myFileRead = function(cb) {
	fs.readFile('0083_demo_index.html', cb);
};
