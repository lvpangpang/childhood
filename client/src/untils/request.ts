import axios from 'axios';

import { Toast } from 'antd-mobile';

import DOMAIN from '@/config/apiDomain';

axios.defaults.baseURL = DOMAIN();

export default function request(config) {
  const {
    method='get',
    url,
    data,
    params,
  } = config;
  return new Promise((reslove, reject) => {
    axios({
      method,
      url,
      data,
      params,
      headers: {
        xToken: localStorage.getItem('xToken')
      },
      timeout: 10000
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
    }).catch((error) => {
      const { msg } = error;
      Toast.fail(msg||'服务端异常，请稍后再试');
      reject(error);
    })
  });
}