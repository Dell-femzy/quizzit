#!/bin/sh

if [ $NODE_ENV = "production" ]; then
  node dist/index.js;
else
  nodemon --exec babel-node app/index.js;
fi