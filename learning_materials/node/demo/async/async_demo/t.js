exports.inc = function(n, callback, timeout) {
    timeout = timeout || 200;
    setTimeout(function() {
        callback(null, n+1);
    }, timeout);
};

exports.fire = function(obj, callback, timeout) {
    timeout = timeout || 200;
    setTimeout(function() {
        callback(null, obj);
    }, timeout);
};

exports.err = function(errMsg, callback, timeout) {
    timeout = timeout || 200;
    setTimeout(function() {
        callback(errMsg);
    }, timeout);
};

// utils
exports.log = function(msg, obj) {
if(obj!==undefined) {
        console.log(obj);
    } else {
        console.log(msg);
    }
};

exports.wait = function(mils) {
    var now = new Date;
    while(new Date - now <= mils);
}