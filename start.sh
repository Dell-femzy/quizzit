#!/bin/sh

if [ $NODE_ENV = "production" ]; then
  pm2 start processes.json
else
  nodemon --exec babel-node app/index.js;
fi