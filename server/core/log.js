// 日记模块
const fs = require('fs');
const path = require('path');

const morgan = require('morgan'); 
const FileStreamRotator = require('file-stream-rotator');

var logDirectory = path.resolve('log');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
var accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false
});

module.exports = morgan('combined', {stream: accessLogStream});