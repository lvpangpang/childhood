import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from 'antd-mobile';

import * as homeAction from '@/store/action/home';
import request from '@/untils/request';
import API from '@/config/api';
import Header from '@/components/Header';
import Upload from './Upload';
import './index.less';

function Index(props) {

  const { 
    list
  } = useSelector((state) => {
    return state.home
  });

  const dispath = useDispatch();

  const [baby, setBaby] = useState({});
  const [showUpload, setShowUpload] = useState(false);

  const getData = useCallback(async() => {
    const data = await request({
      url: API.getUser,
      params: {
        userId: 1
      }
    });
    setBaby(data);
  }, []);

  useEffect(() => {
    getData();
    dispath(homeAction.getList())
  }, []);
  
  return (
    <div className='home-box'>
      <Header 
        title='小时光'
        right={<div onClick={showUpload} className='custom-upload'></div>}
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
      <div className='content-box' id='contentBox'>
        {
          list.map((item) => {
            return <div className='file-item' key={item['dailyId']}>
              <div className='time'>{item['name']} {item['createTime']}</div>
              <Link to='/detail'>
                <div className='img-con'>
                  {
                    item['fileList'].map((item1) => {
                      return <div className='img-item' key={item['url']}>
                        <img src={item1.url}></img>
                      </div>
                    })
                  }
                </div>
              </Link>
            </div>
          })
        }
        <div className='loading'>
          <Icon type='loading'></Icon>
          <span>加载中...</span>
        </div>
      </div>

      {
        showUpload && <Upload cancelHandle={() => {setShowUpload(false)}} successHanlde={getList}></Upload>
      }
    </div>
  )
}

export default Index;