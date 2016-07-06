var async = require('async');
var fs = require('fs');
//每个callback()执行时会将结果保存起来,然后执行下一个调用,直到结束所有调用。
//最终 的回调函数执行时,队列里的异步调用保存的结果以数组的方式传入。
//这里的异常处理规则是一旦出现异常,就结束所有调用,并将异常传递给最终回调函数的第一个参数。
async.series([
	function(callback){
		fs.readFile('file1.txt', 'utf-8', callback);
	},
	function(callback){
		fs.readFile('file2.txt', 'utf-8', callback);
	}
],function(err, results){
	console.log(results)
})
