//===============冒泡排序begin
//难点：
//动画执行时无法停止排序算法的执行
//排序算法的执行将会启动更多动画
//实现了暂停200毫秒、绘制动画、继续排序的效果
var Wind = require("wind");

// var Wind = require('wind');
var compare = function (x, y) { 
	return x - y;
};
var swapAsync = eval(Wind.compile("async", function (a, i, j) { 
	$await(Wind.Async.sleep(200)); // 暂停20毫秒
	var t = a[i]; a[i] = a[j]; a[j] = t;
	// paint(a); // 重绘数组
	console.log("a:",a);
}));

var bubbleSort = eval(Wind.compile("async", function (array) { 
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length - i - 1; j++) 
			{ 
				if (compare(array[j], array[j + 1]) > 0) {
					$await(swapAsync(array, j, j + 1)); 
				}
			} 
		}
	}
));

// bubbleSort([3,6,1,2,7,3,5,7]).start();
//===============冒泡排序end
//
// var Wind = require("wind"); 
// var fs = require('fs');
// var Task = Wind.Async.Task;
// var readFileAsync = function (file, encoding) { 
// 	return Task.create(function (t) {
// 		fs.readFile(file, encoding, function (err, file) { 
// 			if (err) {
// 				t.complete("failure", err); 
// 			} else {
// 				t.complete("success", file); 
// 			}
//     	});
// 	}); 
// };


// var parallel = eval(Wind.compile("async", function () { 
// 	var result = $await(Task.whenAll({
// 			file1: readFileAsync('file1.txt', 'utf-8'),
// 			file2: readFileAsync('file2.txt', 'utf-8') 
// 		})
// 	);
// 	console.log(result.file1);
// 	console.log(result.file2); 
// }));

// parallel().start();


// var serial = eval(Wind.compile("async", function () {
// 	var file1 = $await(readFileAsync('file1.txt', 'utf-8')); 
// 	console.log(file1);
// 	var file2 = $await(readFileAsync('file2.txt', 'utf-8')); 
// 	console.log(file2);
// 	try {
// 		var file3 = $await(readFileAsync('file3.txt', 'utf-8')); 
// 		console.log(file3);
// 	} catch (err) {
// 		console.log(err); 
// 	}
// }));

serial().start();

