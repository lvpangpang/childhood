const { query } = require('../core/mysql.js');


// 日常发布记录表
query('CREATE TABLE daily (dailyId INT NOT NULL auto_increment primary key, userId INT, createTime datetime,       fileList VARCHAR(255), content VARCHAR(255)').then(() => {
  console.log('创建daily表成功');
});

