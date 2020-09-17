const express = require('express');
const router = express.Router();
const { query } = require('../core/mysql.js');

function handleRes(sql, res) {
  return new Promise((resolve, reject) => {
    query(sql).then((data) => {
      resolve(data);
    }).catch((err) => {
      res.json({
        code: 500,
        msg: err.sqlMessage
      });
    })
  });
};

router.use('/add', async (req, res, next) => {
  const { name, age, city } = req.query;
  const sql = `insert into user(name, age, city) values('${name}', ${age}, '${city}')`;
  await handleRes(sql, res);
  res.json({
    code: 0
  });
});

module.exports = router;