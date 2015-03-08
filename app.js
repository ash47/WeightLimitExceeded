var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Do IO stuff
io.on('connection', function(socket){
    socket.on('sound', function(){
        io.emit('sound');
    });
});

// Send files
app.use(express.static(__dirname + '/static'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/static/index.htm');
});

// Setup http server
http.listen(3000, function(){
    var socket = io();
});
