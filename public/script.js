$(document).ready(function(){
  var socket = io();
  $('form').submit(function(){
    // emit message text to server on submit
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  // listen for message, append to DOM
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
})
