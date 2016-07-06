var async = require('async');
var t = require('./t');

/**
 * 让某一个函数在内存中缓存它的计算结果。对于相同的参数，只计算一次，下次就直接拿到之前算好的结果。
 */
// memoize(fn, [hasher])

var slow_fn = function(x, y, callback) {
    console.log('start working for: ' + x+','+y);
    t.wait(100);
    console.log('finished: ' + x+','+y);
    callback(null, 'im slow for: '+x+','+y);
};

var fn = async.memoize(slow_fn);

fn('a','b', function(err, result) {
    console.log(result);
});

// 直接得到之前计算好的值
fn('a','b', function(err, result) {
    console.log(result);
});

/**
 * hasher可以让我们自定义如何根据参数来判断它是否已经在缓存中了。
 */
var fn_hasher = async.memoize(slow_fn, function(x,y) {
    return x+y;
});

fn_hasher('cd','e', function(err, result) {
    console.log(result);
});

fn_hasher('c','de', function(err, result) {
    console.log(result); // 可以取得前面('cd','e')的计算结果
                         // im show for: cd,e
});


/**
 * 让一个已经被memoize的函数不再缓存结果。
 */
// unmemoize(fn)

var fn2 = async.unmemoize(fn);
console.log('unmemoized');

fn2('a','b', function(err,result) {
    console.log(result);
});

/**
 * 执行某异步函数，并记录它的返回值。试验函数时很方便，不用写那些固定模式的代码。
 *
 * 如果该函数向回调中传入了多个参数，则每行记录一个。
 */
// log(function, arguments)

var x = function() {
    this.name = 'Freewind';
}
var hello = function(name, callback) {
    setTimeout(function() {
        callback(null, 'hello ' + name, 'nice to see you ' + name, x, {a:'123'});
    }, 200);
};

async.log(hello, 'world');
// it prints:
// hello world
// nice to see you world
// [Function]
// { a: '123' }

// 我不太明白dir与log之间，到底有什么大的差别。
// http://stackoverflow.com/questions/10636866/whats-the-difference-between-async-log-and-async-dir
async.dir(hello, 'world');
// it prints:
// 'hello world'
// 'nice to see you world'
// [Function]
// { a: '123' }

/**
 * noConflict()仅仅用于浏览器端，在nodejs中没用，这里无法演示。
 *
 * 它的作用是：如果之前已经在全局域中定义了async变量，当导入本async.js时，会先把之前的async变量保存起来，然后覆盖它。用完之后，调用noConflict()方法，就会归还该值。同时返回async本身供换名使用。
 */
// noConflict()

/*
    // global on the server, window in the browser
    var root = this,
        previous_async = root.async;

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = async;
    }
    else {
        root.async = async;
    }

    async.noConflict = function () {
        root.async = previous_async;
        return async;
    };
*/