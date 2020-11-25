import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import request from '@/untils/request';
import API from '@/config/api';
import './index.less';

import Header from '@/common/Header';
import Upload from './Upload';
import { Toast } from 'antd-mobile';

function Index(props) {

  const [baby, setBaby] = useState({});
  const [showUpload, setShowUpload] = useState(false);
  const [data, setData] = useState([]);

  const getData = useCallback(async() => {
    const data = await request({
      url: API.getUser,
      params: {
        userId: 1
      }
    });
    setBaby(data);
  }, []);

  const getList = useCallback(async() => {
    Toast.loading('数据加载中');
    const data = await request({
      url: API.dailyList,
      params: {
        pageIndex: 1,
        pageSize: 10
      }
    });
    setData(data['list']);
    Toast.hide();
  }, []);

  useEffect(() => {
    getData();
    getList();
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
          data.map((item) => {
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
        <div id='loading'>loading</div>
      </div>

      {
        showUpload && <Upload cancelHandle={() => {setShowUpload(false)}} successHanlde={getList}></Upload>
      }
    </div>
  )
}

export default Index;