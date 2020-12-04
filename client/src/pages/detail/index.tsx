import React from 'react';

import { Button } from 'antd-mobile';

import Header from '@/components/Header';
import './index.less';

function Index(props) {
  return( 
    <div className='detail-box'>
      <Header 
        title='详情'
      ></Header>
      <div className='welcome'>哈哈，这是详情页</div>
      <Button type='primary' onClick={()=>{window.history.back()}}>返回</Button>
    </div>
  )
}

export default Index;