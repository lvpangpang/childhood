const isPro = process.env.NODE_ENV === 'production';

const MYSQLDEV = {
  host: '127.0.0.1',
  user: 'root',
  password: '123',
  database: 'childhood',
  port: 3306
};

const MYSQLPRO = {
  host: '116.62.139.102',
  user: 'root',
  password: '',
  database: 'childhood',
  port: 3306
};

let mysqlConfig = MYSQLDEV;
if(isPro) {
  mysqlConfig = MYSQLPRO;
}

module.exports = mysqlConfig;