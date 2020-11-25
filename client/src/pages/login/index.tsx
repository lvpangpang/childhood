import React, { useState } from 'react';

import { Button, InputItem, Toast } from 'antd-mobile';

import './index.less';
import request from '@/untils/request';
import API from '@/config/api';

function login(prop) {
  const [userName, setUserName] = useState('');
  const [pwd, setPwd] = useState('');

  const goLogin = async() => {
    const data = await request({
      method: 'post',
      url: API.login,
      data: {
        userName,
        pwd
      }
    });
    localStorage.setItem('xToken', data['token'])
    Toast.success('欢迎来到新世界');
    prop.history.replace('/');
  };

  return (
    <div className='login-box'>
      <InputItem placeholder='请输入用户名'  className='input' value={userName} onChange={(value)=>{setUserName(value)}}></InputItem>
      <InputItem type='password' placeholder='请输入密码' value={pwd} className='input' onChange={(value) => {setPwd(value)}}></InputItem>
      <Button type='primary' className='btn' onClick={goLogin}>打开新世界</Button>
    </div>
  );
}
export default login;