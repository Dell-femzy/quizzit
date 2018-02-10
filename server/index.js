import express from 'express';
import socket from 'socket.io';
import path from 'path';
import http from 'http';

const app = express();
const server = http.createServer(app);
const socketIo = socket(server);
const port = 7000;

// Listen for requests here
server.listen(port, () => console.log('App started'));

// Serve static files 
app.use(express.static(path.join(__dirname, "../public")));

socketIo.on('connection', (io) => {
  console.log('a request was made');

// Emit message from the server
io.emit('message-from-server',{
  greeting: 'Hello from the server'
  });

io.on('message-from-client', (message) => {
  console.log(message);
  });
});

