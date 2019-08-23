'use strict';
var express = require('express');
var app = express();
var cors = require('cors');
var database = require('./api/helpers/database');
var log = require('./api/helpers/log');
var port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.post('/profile/enable',require('./api/controllers/enableProfile').enableProfile);
app.post('/user/validate',require('./api/controllers/validateUser').validateUser);
app.post('/user/register',require('./api/controllers/registerUser').registerUser);
app.post('/user/login',require('./api/controllers/loginUser').loginUser);

exports.createServer=async function(){
  try {
    await database.initialize();
    await app.listen(port);
    log.info('Server started successfully ast port ' + port);
  } catch (e) {
    log.error(e);
    process.exit(1);
  }
}
exports.createServer();







