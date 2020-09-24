const fs = require('fs');
const express = require('express');
const sd = require('silly-datetime');
const { handleRes } = require('./common.js');
const router = express.Router();

router.use('/add', async (req, res, next) => {
  const { fileList } = req.body;
  const sql = `insert into daily(userId, fileList, content, createTime) values('${1}', '${fileList}', '', '${sd.format(Date.now())}')`;
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
  const sql = `select dailyId, name, fileList, createTime from daily inner join user on daily.userId = user.userId order by createTime desc limit ${(pageIndex-1) * pageSize}, ${pageSize}`;
  const sqlCount = `select count(*) from daily`;
  const data = await handleRes(sql, res);
  const total = await handleRes(sqlCount, res);
  data.forEach((item) => {
    item.fileList = JSON.parse(item.fileList);
    item.createTime = sd.format(item.createTime);
  });
  res.json({
    code: 0,
    data: {
      pageIndex: pageIndex,
      pageSize: pageSize,
      total: total[0]['count(*)'],
      list: data
    }
  });
});

module.exports = router;

