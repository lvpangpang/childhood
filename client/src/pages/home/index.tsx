import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import request from '@/untils/request';
import API from '@/config/api';
import './index.less';

import Header from '@/common/Header';
import Upload from './Upload';

function Index(props) {

  const [baby, setBaby] = useState({});
  const [showUpload, setShowUpload] = useState(false);

  const daysToMonth = useCallback((days) => {
    return days>30 ? Math.floor(days/30) + '个月' + days % 30 + '天' : days + '天';

  }, []);

  const getData = useCallback(async() => {
    const data = await request({
      url: API.getUser,
      params: {
        userId: 1
      }
    });
    setBaby(data);
  }, []);

  const uploadHandle = useCallback(() => {

  }, []);

  useEffect(() => {
    getData();
  }, []);
  

  return (
    <div className='home-box'>
      <Header 
        title='小时光'
        right={<svg t="1600568909969" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4362" width="32" height="32"><path d="M897.138688 264.650752 109.338624 264.650752c-41.85088 0-75.776 33.92512-75.776 75.776l0 491.52c0 41.85088 33.92512 75.776 75.776 75.776l787.800064 0c41.85088 0 75.776-33.92512 75.776-75.776l0-491.52C972.914688 298.575872 938.98752 264.650752 897.138688 264.650752zM503.236608 812.832768c-125.17376 0-226.646016-101.474304-226.646016-226.646016 0-125.17376 101.472256-226.646016 226.646016-226.646016 125.175808 0 226.646016 101.472256 226.646016 226.646016C729.884672 711.358464 628.412416 812.832768 503.236608 812.832768z" p-id="4363"></path><path d="M503.238656 586.186752m-157.507584 0a76.908 76.908 0 1 0 315.015168 0 76.908 76.908 0 1 0-315.015168 0Z" p-id="4364"></path><path d="M633.673728 196.614144c-4.907008-10.139648-18.13504-18.434048-29.39904-18.434048l-202.072064 0c-11.264 0-24.49408 8.296448-29.39904 18.434048L329.201664 286.72c-4.907008 10.139648 0.29696 18.434048 11.56096 18.434048l324.952064 0c11.264 0 16.46592-8.296448 11.56096-18.434048L633.673728 196.614144zM585.158656 222.554112c0 2.627584-9.216 4.777984-20.48 4.777984l-122.88 0c-11.264 0-20.48-2.1504-20.48-4.777984 0-2.629632 9.216-4.777984 20.48-4.777984l122.88 0C575.942656 217.77408 585.158656 219.92448 585.158656 222.554112z" p-id="4365"></path></svg>}
        rightClick={() => {setShowUpload(true)}}
      ></Header>
      <div className='nav-box'>
        <div>
          <div className='head-img'><img width='80' height='80' src={baby['head']} /></div>
          <div className='nick-name'>
            <div>{baby['name']}</div>
          </div>
        </div>
      </div>
      <div className='content-box'>
        <Link to='/detail'>详情</Link>
      </div>

      {
        showUpload && <Upload cancelHandle={() => {setShowUpload(false)}}></Upload>
      }
    </div>
  )
}

export default Index;