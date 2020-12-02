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
    handleError=false
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
      const { code, msg } = result;
      // 正常业务
      if(code===0) {
        reslove(result.data);
        // 未登录
      } else if (code===10) {
        window.location.href = '/login';
      } else {
        Toast.fail(msg);
        if(handleError) {
          reject(result);
        }
      }
    }).catch((error) => {
      const { message='' } = error;
      if(message.includes('timeout')) {
        Toast.fail('请求超时，请稍后再试');
      } else {
        Toast.fail('服务器异常，请稍后再试')
      }
      if(handleError) {
        reject(error);
      }
    })
  });
}