var async = require('async');

var t = require('./t');
var log = t.log;

/**
 * �Լ����ڵ�Ԫ�ؽ�����������ÿ��Ԫ�ؽ���ĳ�첽�����������ֵ����С��������
 */
// sortBy(array, iterator(item,callback(err,result)), callback(err,results))

var arr = [3,6,1];

async.sortBy(arr, function(item, callback) {
    setTimeout(function() {
        callback(null,item);
    }, 200);
}, function(err,results) {
    log('1.1 err: ', err);
    log('1.1 results: ', results);
});
// 26.562> 1.1 err: null
// 26.562> 1.1 results: [ 1, 3, 6 ]

async.sortBy(arr, function(item, callback) {
    setTimeout(function() {
        if(item===6) callback('myerr');
        else callback(null,item);
    }, 200);
}, function(err,results) {
    log('1.2 err: ', err);
    log('1.2 results: ', results);
});
// 26.572> 1.2 err: myerr
// 26.572> 1.2 results:
