var async = require('async');
var fs = require('fs');

async.parallel([ 
	function (callback) {
		fs.readFile('file1.txt', 'utf-8', callback); 
	},
	function (callback) {
		fs.readFile('file2.txt', 'utf-8', callback);
	}
], function (err, results) {
	// results => [file1.txt, file2.txt] 
	console.log(results);
});