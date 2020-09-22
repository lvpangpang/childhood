const jwt = require('jsonwebtoken');
const jwtScrect = '123456';

const setToken = (userName, userId) => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign({
      userName,
      userId
    }, jwtScrect, {expiresIn: '24h'});
    resolve(token)
  })
};

const getTokenData = (token) => {
  console.log(token)
  return new Promise((resolve, reject) => {
    if(!token) {
      reject({err: 'token是空的'})
    } else {
      const info = jwt.verify(token.split('.')[1], jwtScrect);
      console.log(info)
      resolve(info);
    }
  });
};

module.exports = {
  setToken,
  getTokenData
};