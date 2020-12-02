// 数据库链接
const mysql = require('mysql');
const mysqlConfig = require('../config/mysql.js');

const connection = mysql.createConnection(mysqlConfig);
connection.connect();

function query(sql) {
  return new Promise((reslove, reject) => {
    connection.query(sql, function (err, data) {
      if (err) {
        console.log('mysql错误：' + err);
        reject(err);
        return;
      }
      reslove(data);
    });
  });
}

module.exports = {
  connection,
  query
}