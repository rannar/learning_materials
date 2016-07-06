var async = require('async');

var t = require('./t');
var log = t.log;

/**
 * ���������ÿһ��Ԫ�ض������������򴫸����ջص���resultΪtrue������Ϊfalse
 */
// every(arr, iterator(item,callback), callback(result))
//alias: any

var arr = [1,2,3,6];

/**
 * ���������е�Ԫ�ض�<=10������Ϊtrue
 */
async.every(arr, function(item,callback){
    log('1.1 enter: ',item);
    setTimeout(function(){
        log('1.1 handle: ',item);
        callback(item<=10);
    },100);    
}, function(result) {
    log('1.1 result: ', result);
});
// 32.113> 1.1 enter: 1
// 32.123> 1.1 enter: 2
// 32.123> 1.1 enter: 3
// 32.123> 1.1 enter: 6
// 32.233> 1.1 handle: 1
// 32.233> 1.1 handle: 2
// 32.233> 1.1 handle: 3
// 32.233> 1.1 handle: 6
// 32.233> 1.1 result: true

/**
 * ������������һ��Ԫ�ز�����2������Ϊfalse
 */
async.every(arr, function(item,callback){
    log('1.2 enter: ',item);
    setTimeout(function(){
        log('1.2 handle: ',item);
        callback(item>2);
    },100);    
}, function(result) {
    log('1.2 result: ', result);
});
// 32.123> 1.2 enter: 1
// 32.123> 1.2 enter: 2
// 32.123> 1.2 enter: 3
// 32.123> 1.2 enter: 6
// 32.233> 1.2 handle: 1
// 32.233> 1.2 result: false
// 32.233> 1.2 handle: 2
// 32.233> 1.2 handle: 3
// 32.233> 1.2 handle: 6
