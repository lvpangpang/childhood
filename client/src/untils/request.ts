import axios from 'axios';

import { Toast } from 'antd-mobile';

import DOMAIN from '@/config/apiDomain';

axios.defaults.baseURL = DOMAIN();

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
      url: url,
      data,
      params,
      headers,
      timeout: 8000
    }).then((data) => {
      const result = data.data;
      const { code } = result;

      // 正常业务
      if(code===0) {
        reslove(result.data);
        // 未登录
      } else if (code===10) {
        window.location.href = '/login';
      } else {
        reject(result);
      }
    }).catch((err) => {
      Toast.fail('服务端异常，请稍后再试');
    })
  });
}