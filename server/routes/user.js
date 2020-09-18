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

module.exports = router;