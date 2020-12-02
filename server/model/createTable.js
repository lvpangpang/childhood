const { query } = require('../core/mysql.js');

// 用户表
query('CREATE TABLE user (userId INT NOT NULL auto_increment primary key, name VARCHAR(255), age INT(3), city VARCHAR(255), pwd VARCHAR(255), head VARCHAR(255))').then(() => {
  console.log('创建user表成功');
});

// 日常记录表
query('CREATE TABLE daily (dailyId INT NOT NULL auto_increment primary key, userId INT, createTime datetime,fileList VARCHAR(255), content VARCHAR(255))').then(() => {
  console.log('创建daily表成功');
});

// 点赞表
query('CREATE TABLE thumbs (thumbs INT NOT NULL auto_increment primary key, fileId INT, authorId INT, createTime datetime)').then(() => {
  console.log('创建thumbs表成功');
});

// 评论表
query('CREATE TABLE comment (commentId INT NOT NULL auto_increment primary key, fileId INT, authorId INT, parentId INT, createTime datetime, content VARCHAR(255))').then(() => {
  console.log('创建comment表成功');
});

