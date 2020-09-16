const isPro = process.env.NODE_ENV === 'production';

const MYSQLDEV = {
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'mytest',
  port: 3306
};

const MYSQLPRO = {
  host: '116.62.139.102',
  user: 'root',
  password: '123456',
  database: 'mytest',
  port: 3306
};

let mysql = MYSQLDEV;
if(isPro) {
  mysql = MYSQLPRO;
}

module.exports = {
  mysql
};