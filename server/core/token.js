const jwt = require('jsonwebtoken');
const jwtScrect = '123456';

const setToken = (userName, userId) => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign({
      userName,
      userId
    }, jwtScrect, {expiresIn: 60 * 60 * 24 }); // 单位为秒 token有效期设置为24h
    resolve(token);
  })
};

const getTokenData = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, jwtScrect, (err, data) => {
      if(err) {
        rejext(err);
      }
      resolve(data);
    });
  });
};

module.exports = {
  setToken,
  getTokenData
};

