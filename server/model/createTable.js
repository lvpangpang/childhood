const { query } = require('../core/mysql.js');

// baby表
query('CREATE TABLE baby (babyId INT NOT NULL auto_increment primary key, name VARCHAR(15), days INT, createTime datetime, userId INT, head VARCHAR(255))').then(() => {
  console.log('创建baby表成功');
});

// 用户表
query('CREATE TABLE user (userId INT NOT NULL auto_increment primary key, name VARCHAR(255), age INT(3), city VARCHAR(255))').then(() => {
  console.log('创建user表成功');
});

// 日常发布记录表
query('CREATE TABLE daily (dailyId INT NOT NULL auto_increment primary key, userId INT, createTime datetime,fileList VARCHAR(255), content VARCHAR(255)').then(() => {
  console.log('创建daily表成功');
});


// 文件表
query('CREATE TABLE file (fileId INT NOT NULL auto_increment primary key, type INT, url VARCHAR(255), createTime datetime, authorId INT)').then(() => {
  console.log('创建picture表成功');
});

// 点赞表
query('CREATE TABLE thumbs (thumbs INT NOT NULL auto_increment primary key, fileId INT, authorId INT, createTime datetime)').then(() => {
  console.log('创建thumbs表成功');
});

// 评论表
query('CREATE TABLE comment (commentId INT NOT NULL auto_increment primary key, fileId INT, authorId INT, parentId INT, createTime datetime, content VARCHAR(255))').then(() => {
  console.log('创建comment表成功');
});

