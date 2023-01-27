const io = require("Socket.io");


io.Socket.on('connection', function(socket){
  socket.on('mouse_activity',function(data){
      console.log(data)
  });
})