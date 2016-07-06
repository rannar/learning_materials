var async = require('async');

var t = require('./t');
var log = t.log;

/**
 * ���������Ƿ�������һ��Ԫ����������ʱ������callback�õ���ֵΪtrue������Ϊfalse.
 */
// some(arr, iterator(item,callback(test)), callback(result))
//alias: any

var arr = [1,2,3,6];

/**
 * ������������һ��Ԫ��<=3�����Խ��Ϊtrue
 */
// 1.1
async.some(arr, function(item,callback){
    log('1.1 enter: ',item);
    setTimeout(function(){
        log('1.1 handle: ',item);
        callback(item<=3);
    },100);    
}, function(result) {
    log('1.1 result: ', result);
});
// 36.165> 1.1 enter: 1
// 36.165> 1.1 enter: 2
// 36.165> 1.1 enter: 3
// 36.165> 1.1 enter: 6
// 36.275> 1.1 handle: 1
// 36.275> 1.1 result: true
// 36.275> 1.1 handle: 2
// 36.275> 1.1 handle: 3
// 36.275> 1.1 handle: 6


/**
 * ������û��һ��Ԫ��>10�����Խ��Ϊfalse
 */
async.some(arr, function(item,callback){
    log('1.2 enter: ',item);
    setTimeout(function(){
        log('1.2 handle: ',item);
        callback(item>10);
    },100);    
}, function(result) {
    log('1.2 result: ', result);
});
// 36.165> 1.2 enter: 1
// 36.165> 1.2 enter: 2
// 36.165> 1.2 enter: 3
// 36.165> 1.2 enter: 6
// 36.275> 1.2 handle: 1
// 36.275> 1.2 handle: 2
// 36.275> 1.2 handle: 3
// 36.275> 1.2 handle: 6
// 36.275> 1.2 result: false
