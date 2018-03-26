const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New User connected');
	socket.emit('newMessage', {
		from: 'mike',
		text: 'hello',
		createdAt: 123
	});
	
	socket.on('createMessage', (message) => {
		console.log('message', message);
	});

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

server.listen(port, () => {
	console.log(`Server running on port ${port}`);
});