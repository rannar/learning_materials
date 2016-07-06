var net = require('net');
var server = net.createServer();
var sockets = [];
server.on('connection', function(socket){
	console.log('have a new connection');
	socket.write('System say: Welcome!\n');

	sockets.push(socket);

	socket.on('data', function(data){
		sockets.forEach(function(anotherSocket){
            if(anotherSocket !== socket){
            	var prefix = 'User ' + sockets.indexOf(socket) + ' say: ';
            	anotherSocket.write(prefix + data);
            }
		})
	})

	socket.on('close', function(){
		console.log('connection closed');
		var index = sockets.indexOf(socket);
		//删除已经断开的连接
        sockets.splice(index,1);
	})
})

server.on('error',function(err){
    console.log('Server error: ',err.message);
});

server.on('close',function(){
    console.log('Server closed');
});

server.listen(4000);