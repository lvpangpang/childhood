const { query } = require('../core/mysql.js');

function handleRes(sql, res) {
  return new Promise((resolve, reject) => {
    query(sql).then((data) => {
      resolve(data);
    }).catch((err) => {
      res.json({
        code: 2004,
        msg: err
      });
    })
  });
};



module.exports = {
  handleRes
};