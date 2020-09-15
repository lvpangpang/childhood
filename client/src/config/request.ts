import axios from 'axios';

import { Toast } from 'antd-mobile';

import DOMAIN from './apiDomain';

axios.defaults.baseURL = 'https://api.example.com';

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function request(config) {
  const {
    method='get',
    url,
    data,
    params,
    headers
  } = config;
  return new Promise((reslove, reject) => {
    axios({
      method,
      url: DOMAIN + url,
      data,
      params,
      headers,
      timeout: 8000
    }).then((data) => {
      const result = data.data;
      /* const { code } = result;
      // 正常业务
      if(code===0) {
        reslove(data);
        // 未登录
      } else if (code===10) {
        window.location.href = '/login';
      } else {
        reject(data);
      } */
    }).catch((err) => {
      Toast.fail('服务端异常，请稍后再试');
      reject(data);
    })
  });
}