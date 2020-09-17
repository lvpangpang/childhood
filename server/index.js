const express = require('express');
const app = express();

// 数据库连接
require('./core/mysql.js');
// body数据处理
const bodyParse = require('./core/http.js');
// 日记
const log = require('./core/log.js');

const userRoute = require('./routes/user.js');

app.use(bodyParse.urlencoded);
app.use(express.static('public'));
app.use(log);

//解决跨域
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});

app.use('/', (req, res) => {
  res.send('吕肥肥的小时光');
});

app.use('/user', userRoute);

app.listen(3000, () => {
  console.log('吕肥肥的小时光启动了');
});