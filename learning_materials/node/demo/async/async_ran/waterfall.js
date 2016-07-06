var async = require('async');
var fs = require('fs');

async.waterfall([ 
	function (callback) {
		fs.readFile('file1.txt', 'utf-8', function (err, content) { 
			callback(err, content);
		}); 
	},
	function (arg1, callback) {
		// arg1 => file2.txt
		fs.readFile(arg1, 'utf-8', function (err, content) {
		callback(err, content); });
   },
	function(arg1, callback){ 8
	// arg1 => file3.txt
	fs.readFile(arg1, 'utf-8', function (err, content) {
		callback(err, content); });
	}
], function (err, result) {
	// result => file4.txt 
	console.log(result)
});