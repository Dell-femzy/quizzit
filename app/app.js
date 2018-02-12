import express from 'express';
import socket from 'socket.io';
import http from 'http';
import expressWinston from 'express-winston';

import SocketCtrl from './socket';

const env = process.env.NODE_ENV || 'development';
const app = express();
const server = http.Server(app);
const socketIo = socket(server);

SocketCtrl.onConnect(socketIo);

export default app;