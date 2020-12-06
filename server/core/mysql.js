// 数据库链接
const mysql = require('mysql');
const mysqlConfig = require('../config/mysql.js');

// 用连接池连接，否则部署到阿里云一段时间就会连接不上mysql
const pool = mysql.createPool(mysqlConfig);

function query(sql) {
  return new Promise((reslove, reject) => {
    pool.getConnection((err, conn) => {
      if(err) {
        reject(err);
      }
      conn.query(sql, function (err, data) {
        if (err) {
          reject(err);
        }
        reslove(data);
        conn.release();
      });
    });
  });
}

module.exports = {
  query
}