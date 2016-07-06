var async = require('async');

var t = require('./t');
var log = t.log;

/**
 * Reduce���������Ǹ���һ����ʼֵ�������뼯���е�ÿһ��Ԫ�������㣬���õ�һ��ֵ��reduce��������������Ԫ�أ������������󣬿�ʹ��reduceRight��
 */
//reduce(arr, memo, iterator(memo,item,callback), callback(err,result))
//alias: inject, foldl

var arr = [1,3,5];

async.reduce(arr, 100, function(memo, item, callback) {
    log('1.1 enter: ' + memo +', ' + item);
    setTimeout(function() {
        callback(null, memo+item);
    }, 100);
},function(err, result) {
    log('1.1 err: ', err);
    log('1.1 result: ', result);
});
// 28.789> 1.1 enter: 100, 1
// 28.889> 1.1 enter: 101, 3
// 28.999> 1.1 enter: 104, 5
// 29.109> 1.1 err:
// 29.109> 1.1 result: 109

async.reduce(arr, 100, function(memo, item, callback) {
    log('1.2 enter: ' + memo +', ' + item);
    setTimeout(function() {
        if(item===3) callback('myerr');
        else callback(null, memo+item);
    }, 100);
},function(err, result) {
    log('1.2 err: ', err);
    log('1.2 result: ', result);
});
// 05.541> 1.2 enter: 100, 1
// 05.649> 1.2 enter: 101, 3
// 05.760> 1.2 err: myerr
// 05.760> 1.2 result:

//alias: foldr
async.reduceRight(arr, 100, function(memo, item, callback) {
    log('1.3 enter: ' + memo +', ' + item);
    setTimeout(function() {
        callback(null, memo+item);
    }, 100);
},function(err, result) {
    log('1.3 err: ', err);
    log('1.3 result: ', result);
});
// 28.789> 1.3 enter: 100, 5
// 28.889> 1.3 enter: 105, 3
// 28.999> 1.3 enter: 108, 1
// 29.109> 1.3 err:
// 29.109> 1.3 result: 109

//
async.reduce(arr, 100, function(memo,item,callback) {
    log('1.4 enter: '+memo+','+item);
    t.inc(item, function(err,n) {
        log('1.4 handle: ',n);
        callback(null, memo+n);
    });
}, function(err,result) {
    log('1.4 err: ', err);
    log('1.4 result: ', result);
});
// 28.789> 1.4 enter: 100,1
// 28.999> 1.4 handle: 2
// 28.999> 1.4 enter: 102,3
// 29.209> 1.4 handle: 4
// 29.209> 1.4 enter: 106,5
// 29.409> 1.4 handle: 6
// 29.409> 1.4 err:
// 29.409> 1.4 result: 112
// --> spent 0.62s

async.map(arr, function(item, callback) {
    log('1.5 enter: ', item);
    t.inc(item, function(err,n){
        log('1.5 handle: ', n);
        callback(null,n);
    });  
},function(err, results) {
    log('1.5 err: ', err);
    log('1.5 results: ', results);
    var sum = results.reduce(function(memo, item) {
        return memo + item;
    }, 100);
    log('1.5 sum: ', sum);
});
// 28.789> 1.5 enter: 1
// 28.789> 1.5 enter: 3
// 28.789> 1.5 enter: 5
// 28.999> 1.5 handle: 2
// 28.999> 1.5 handle: 4
// 28.999> 1.5 handle: 6
// 28.999> 1.5 err:
// 28.999> 1.5 results: [ 2, 4, 6 ]
// 28.999> 1.5 sum: 112
// --> spent 0.21