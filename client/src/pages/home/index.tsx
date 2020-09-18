import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import request from '@/untils/request';
import API from '@/config/api';
import './index.less';

import Header from '@/common/Header';

function Index(props) {

  const [baby, setBaby] = useState({});

  const daysToMonth = useCallback((days) => {
    return days>30 ? Math.floor(days/30) + '个月' + days%30 + '天' : days + '天';

  }, []);

  const getData = useCallback(async() => {
    const data = await request({
      url: API.getBaby,
      params: {
        babyId:1
      }
    });
    setBaby(data);
  }, []);

  useEffect(() => {
    getData();
  }, []);
  

  return (
    <div className='home-box'>
      <Header name='小家'></Header>
      <div className='nav-box'>
        <div>
          <div className='head-img'><img width='80' height='80' src={baby['head']} /></div>
          <div className='nick-name'>
            <div>{baby['name']}</div>
            <p>{daysToMonth(baby['days'])}</p>
          </div>
        </div>
      </div>
      <div className='content-box'>
        <Link to='/detail'>详情</Link>
      </div>
    </div>
  )
}

export default Index;