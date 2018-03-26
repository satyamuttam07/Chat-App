    var socket = io();
	socket.on('connect', function () {
		console.log('connected to server');

		socket.emit('createMessage', {
			from: 'kk',
			text: 'hello again'
		});
	});
	socket.on('disconnect', function () {
		console.log('Disconnect from server');
	});
	socket.on('newMessage', function (message) {
		console.log('newMessage', message);
	});