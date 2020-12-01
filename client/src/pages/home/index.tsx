import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from 'antd-mobile';

import * as homeAction from '@/store/action/home.ts';
import Header from '@/components/Header';
import Upload from './Upload';
import './index.less';

let isFirst = 0;

function Index(props) {
  const { 
    list,
    hasMore,
    userInfo
  } = useSelector((state) => {
    return state.home
  });

  const dispath = useDispatch();

  const hasMoreRef = useRef();
  hasMoreRef.current = hasMore;

  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    if(isFirst===0) {
      isFirst=1;
      dispath(homeAction.getList())
      dispath(homeAction.getUserInfo())
    } else {
      window.scrollTo(0, parseFloat(sessionStorage.getItem('scrollTop')));
    }

    return () => {
      sessionStorage.setItem('scrollTop', (document.body.scrollTop || document.documentElement.scrollTop) + '')
    }
  }, []);

  useEffect(() => {
    hasMoreRef.current = hasMore;
  }, [hasMore])

  useEffect(() => {
    // 下拉加载更多
    let isAjax = false;
    $(window).scroll(async function() {
      var scrollTop = $(this).scrollTop(),
        scrollHeight = $(document).height(),
        windowHeight = $(this).height();
      var positionValue = scrollHeight - (scrollTop + windowHeight);
      if(positionValue<100&&!isAjax&&hasMoreRef.current) {
        isAjax = true;
        await dispath(homeAction.getList());
        isAjax = false;
      }
    });
  }, [])
  
  return (
    <div className='home-box'>
      <Header 
        title='小时光'
        right={<div onClick={showUpload} className='custom-upload'></div>}
        rightClick={() => {setShowUpload(true)}}
      ></Header>
      <div className='nav-box'>
        <div>
          <div className='head-img'><img width='80' height='80' src={userInfo['head']} /></div>
          <div className='nick-name'>
            <div>{userInfo['name']}</div>
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
        {<div>{hasMore}</div>}
        {
          hasMore ? <div className='loading' id='loading'>
            <Icon type='loading'></Icon>
            <span>加载中...</span>
          </div> : <div className='no-more-data'>没有更多数据了</div>
        }
      </div>

      {
        showUpload && <Upload cancelHandle={() => {setShowUpload(false)}} successHanlde={() => {
          dispath(homeAction.getList(1))
        }}></Upload>
      }
    </div>
  )
}

export default Index;