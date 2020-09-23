const express = require('express');
const { handleRes } = require('./common.js');
const verToken = require('../core/token.js');
const router = express.Router();

router.use('/', async (req, res, next) => {
  const { userName, pwd } = req.body;
  const sql = `select * from user where name='${userName}' and pwd='${pwd}'`;
  const data = await handleRes(sql, res);

  // 用户名密码正确
  if(data && data.length>0) {
    verToken.setToken(userName, data[0]['userId']).then((data) => {
      res.json({
        code: 0,
        data: {
          token: data
        }
      });
    });
  } else {
    res.json({
      code: 1,
      data: {
        msg: '用户名或者密码不正确'
      }
    });
  }
});


module.exports = router;

