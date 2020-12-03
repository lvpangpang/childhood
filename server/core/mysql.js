// 数据库链接
const mysql = require('mysql');
const mysqlConfig = require('../config/mysql.js');

const connection = mysql.createConnection(mysqlConfig);
connection.connect(function(err) {
	if (err) {
		console.error('数据库连接失败: ' + err);
		return;
	}
	console.log('数据库连接成功' + connection.threadId);
});

function query(sql) {
  return new Promise((reslove, reject) => {
    connection.query(sql, function (err, data) {
      if (err) {
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