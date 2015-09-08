// load express
var express = require('express');
var app = express();
var path = require("path");
// load http server
var http = require('http').Server(app);
// load socket.io on top of http server
var io = require('socket.io')(http)

app.use("/public", express.static(path.join(__dirname + "/public")));

// index route
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

// create a new 'socket' object for each new connection
io.on('connection', function(socket){
  console.log("a user connected");
  // listen for emitted client message
  socket.on('chat message', function(msg){
    // emit message back to all connected clients
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  })
})

// have the server listen to port 3000
http.listen(3000, function(){
  console.log('listening on port 3000')
})
