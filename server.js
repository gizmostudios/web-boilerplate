const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');

// @TODO make this a file
let settings = {
  dimensions: {
    xscale: 100,
    yscale: 100
  }
}

// Serve the app
app.use(express.static('public'));

io.on('connection', function(socket){
    
    // Let clients know they're connected
    console.log(`player [${socket.id}] connected`);
    socket.emit('connected');


    // Dimensions
    socket.emit('dimensions', settings.dimensions);

    socket.on('xscaleUpdate', change => {
      settings.dimensions.xscale += change;
      io.emit('dimensions', settings.dimensions);
    });

    socket.on('yscaleUpdate', change => {
      settings.dimensions.yscale += change;
      io.emit('dimensions', settings.dimensions);
    });


    // Playstate
    socket.on('finished', function(){
      console.log('finished, next');
      io.emit('next');
    });

    socket.on('play', function(){
      console.log('play');
      io.emit('play');
    });

    socket.on('pause', function(){
      console.log('pause');
      io.emit('pause');
    });

    socket.on('prev', function(){
      console.log('prev');
      io.emit('prev');
    });

    socket.on('next', function(){
      console.log('next');
      io.emit('next');
    });

    socket.on('playlistChange', playlist => {
      console.log(playlist);
      io.emit('playlistChange', playlist);
    });

    // Reporting
    socket.on('current', videoPath => {
      console.log(videoPath);
      io.emit('current', videoPath);
    });


});

console.log('Ok');

// Start server
http.listen(8080, function(){
  console.log('listening on *:8080');
});