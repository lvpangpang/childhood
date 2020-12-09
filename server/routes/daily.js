const fs = require('fs');
const express = require('express');
const sd = require('silly-datetime');
const { handleRes } = require('./common.js');
const router = express.Router();

function handleFileList(list, domain) {
  let fileList = list ? JSON.parse(list) : [];
  fileList.forEach((item) => {
    item.url = '//' + domain + item.url; 
  });
  return fileList;
}

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
    pageSize=10
  } = req.query;
  const domain = req['headers']['host'];
  const sql = `select dailyId, name, fileList, createTime from daily inner join user on daily.userId = user.userId order by createTime desc limit ${(pageIndex-1) * pageSize}, ${pageSize}`;
  const sqlCount = `select count(*) from daily`;
  const data = await handleRes(sql, res);
  const total = await handleRes(sqlCount, res);
  data.forEach((item) => {
    item.fileList = handleFileList(item.fileList, domain);
    item.createTime = sd.format(item.createTime);
  });
  res.json({
    code: 0,
    data: {
      pageIndex: parseInt(pageIndex),
      pageSize: parseInt(pageSize),
      total: total[0]['count(*)'],
      list: data
    }
  });
});

router.use('/details', async (req, res, next) => {
  const {
    dailyId
  } = req.query;
  const domain = req['headers']['host'];
  const sql = `select * from daily where dailyId='${dailyId}'`;
  let data = await handleRes(sql);
  data = data && data[0];
  data.fileList = handleFileList(data['fileList'], domain);
  res.json({
    code: 0,
    data: data
  });
});

module.exports = router;

