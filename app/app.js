import express from 'express';
import socket from 'socket.io';
import http from 'http';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import winston from 'winston';
import expressWinston from 'express-winston';

import SocketCtrl from './socket';

const env = process.env.NODE_ENV || 'development';
const app = express();
const server = http.Server(app);
const socketIo = socket(server);

SocketCtrl.onConnect(socketIo);

// winston dev logger
if (env !== 'production') {
  app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console({
        json: false,
        colorize: true
      })
    ],
    msg: "HTTP {{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}",
    colorize: true
  }));
}

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.status(200).send({
    message: 'Quzzit Api'
  });
});

// winston error logging
if (env !== 'production') {
  app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console({
        json: true,
        colorize: true
      })
    ]
  }));
}

export default app;