const express = require('express');
const router = express.Router();
const { handleRes } = require('./common.js');

router.use('/add', async (req, res, next) => {
  const { name, age, city, pwd, head } = req.query;
  const sql = `insert into user(name, age, city, pwd, head) values('${name}', ${age}, '${city}', '${pwd}', '${head}')`;
  await handleRes(sql, res);
  res.json({
    code: 0
  });
});

router.use('/get', async (req, res, next) => {
  const { userId } = req.userInfo;
  const sql = `select * from user where userId='${userId}'`;
  const data = await handleRes(sql, res);
  res.json({
    code: 0,
    data: data[0] || {}
  });
});

module.exports = router;