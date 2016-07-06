var Step = require('step');
var fs = require('fs');
// //串行
// Step(function readFile1(){
// 	fs.readFile('file1.txt','utf-8',this);
// },function readFile2(){
// 	fs.readFile('file2.txt','utf-8',this)
// },function done(err,content){
// 	console.log(content);
// })

// //并行
// Step(function readFile1() {
// 	fs.readFile('file1.txt', 'utf-8', this.parallel());
// 	fs.readFile('file2.txt', 'utf-8', this.parallel()); 
// },function done(err, content1, content2) { 
// 	// content1 => file1
// 	// content2 => file2 
// 	console.log(arguments);
// } );

//结果分组
Step(
	function readDir() {
  		fs.readdir(__dirname, this); 
	},
	function readFiles(err, results) {
		if (err) throw err;	
		var group = this.group(); //告诉Step要并行执行
		results.forEach(function (filename) {
			if (/\.txt$/.test(filename)) {
				//第二次调用的结果将会生成一个回调函数，而回调函数接受的返回值将会按照数组存储
				fs.readFile(__dirname + "/" + filename, 'utf8', group());
			} 
		});
	},
	function showAll(err, files) {
  		if (err) throw err;
		console.dir(files); 
	}
);