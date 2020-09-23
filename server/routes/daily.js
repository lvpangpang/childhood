const fs = require('fs');
const express = require('express');
const sd = require('silly-datetime');
const { handleRes } = require('./common.js');
const router = express.Router();

router.use('/add', async (req, res, next) => {
  const { fileList } = req.body;
  const sql = `insert into daily(userId, fileList, content, createTime) values('${1}', '${fileList}', '', '${sd.format(new Date(), 'YYYY-MM-DD HH:mm')}')`;
  const data = await handleRes(sql, res);
  res.json({
    code: 0,
    data: null
  });
});

router.use('/list', async (req, res, next) => {
  const {
    pageIndex=1,
    pageSize=2
  } = req.query;
  const sql = `select * from daily limit ${(pageIndex-1) * pageSize}, ${pageSize}`;
  console.log(sql)
  const data = await handleRes(sql, res);
  res.json({
    code: 0,
    data: data
  });
});

module.exports = router;

