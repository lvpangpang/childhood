const express = require('express');
const router = express.Router();
const { handleRes } = require('./common.js');

router.use('/add', async (req, res, next) => {
  const { name, age, city } = req.query;
  const sql = `insert into user(name, age, city) values('${name}', ${age}, '${city}')`;
  await handleRes(sql, res);
  res.json({
    code: 0
  });
});

router.use('/get', async (req, res, next) => {
  const { userId } = req.query;
  const sql = `select * from user where userId='${userId}'`;
  const data = await handleRes(sql, res);
  res.json({
    code: 0,
    data: data[0]
  });
});

module.exports = router;