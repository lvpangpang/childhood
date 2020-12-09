const fs = require('fs');
const express = require('express');
const sd = require('silly-datetime');
const { handleRes } = require('./common.js');
const router = express.Router();

router.use('/add', async (req, res, next) => {
  const { 
    dailyId,
    parentId,
    content
   } = req.body;
  const { userId } = req.userInfo;

  const sql = `insert into comment(dailyId, authorId, parentId, content, createTime) values(${dailyId}, ${userId}, ${parentId}, '${content}', '${sd.format(Date.now())}')`;
  const data = await handleRes(sql, res);
  res.json({
    code: 0,
    data: null
  });
});

router.use('/query', async (req, res, next) => {
  const { 
    dailyId
   } = req.query;
  const sql = `select commentId, dailyId, userId, parentId, createTime, content, name, head from comment inner join user on comment.authorId = user.userId where dailyId=${dailyId}`;
  const data = await handleRes(sql, res);

  // 数据时间格式化
  data.forEach((item) => {
    item.createTime = sd.format(item.createTime);
  });

  // 数据组装
  for(var k=0; k<data.length; k++) {
    var item = data[k];
    var son = [];
    // 该评论是顶级评论
    if(!item['parentId']) {
      for(var j=0; j<data.length; j++) {
        var item1 = data[j];
        if(item['commentId'] === item1['parentId']) {
          son.push(item1);
          data.splice(j, 1);
          j--;
        }
      }
      item['son'] = son;
    } else {
      continue;
    }
  }
  res.json({
    code: 0,
    data: data
  });
});

module.exports = router;

