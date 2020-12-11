const fs = require('fs');

const express = require('express');
const app = express();

const verToken = require('./core/token.js');

// 数据库
require('./core/mysql.js');
const bodyParse = require('./core/http.js');
// 日记
const log = require('./core/log.js');

// 业务路由
const loginRoute = require('./routes/login.js');
const userRoute = require('./routes/user.js');
const uploadRoute = require('./routes/upload.js');
const dailyRoute = require('./routes/daily.js');
const commentRoute = require('./routes/comment.js');

app.use(bodyParse.json);

app.use(express.static('upload'));
app.use(log);

//解决跨域
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, xToken');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  }
  else {
    next();
  }
});

app.use('/login',loginRoute);

// 解析token
app.use(function(req, res, next) {
  const token = req.headers['xtoken'];
  if(!token || token === 'null') {
    res.json({
      code: 10,
      data: {
        msg: 'token失效'
      }
    });
  } else {
    verToken.getTokenData(token).then((data) => {
      req.userInfo = data;
      return next();
    }).catch((err) => {
      res.json({
        code: 10,
        data: {
          msg: 'token失效'
        }
      });
    })
  }
});

app.use('/user', userRoute);
app.use('/file', uploadRoute);
app.use('/daily', dailyRoute);
app.use('/comment', commentRoute);


app.listen(3000, () => {
  console.log('小时光启动成功');
});