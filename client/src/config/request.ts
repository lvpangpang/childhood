import axios from 'axios';

import { Toast } from 'antd-mobile';

import DOMAIN from './apiDomain.ts';

axios.defaults.baseURL = 'https://api.example.com';

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function request(params) {
  const {
    method,
    url,
    data,
    headers
  } = params;
  return new Promise((reslove, reject) => {
    axios({
      method,
      url: DOMAIN + url,
      data,
      headers
    }).then((data) => {
      data = data.data;
      const { code } = data;
      // 正常业务
      if(code===0) {
        reslove(data);
        // 未登录
      } else if (code===10) {
        window.location.href = '/login';
      } else {
        reject(data);
      }
    }).catch((err) => {
      Toast.fail('服务端异常，请稍后再试');
      reject(data);
    })
  });
}