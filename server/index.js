const express = require('express');
const app = express();

const verToken = require('./core/token.js');
const expressJwt = require('express-jwt');

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

app.use(bodyParse.json);
app.use(express.static('upload'));
app.use(log);

//解决跨域
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, xToken');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});

// 解析token获取用户信息
app.use(function(req, res, next) {
  const token = req.headers['xtoken'];
  console.log(token)
  if(!token) {
    return next();
  } else {
    verToken.getTokenData(token).then((data) => {
      req.data = data;
      return next();
    }).catch((err) => {
      console.log(err);
      return next();
    })
  }
});

app.use(expressJwt({
  secret: '123456',
  algorithms: ['HS256']
}).unless({
  path: ['/login', '/register']
}));

app.use('/login',loginRoute);
app.use('/user', userRoute);
app.use('/file', uploadRoute);
app.use('/daily', dailyRoute);

// 这个处理一定需要
app.use(function(err, req, res, next){
  if(err.status==401){
    res.json({message:'token失效'});
  }
});

app.listen(3000, () => {
  console.log('吕肥肥的小时光启动了');
});