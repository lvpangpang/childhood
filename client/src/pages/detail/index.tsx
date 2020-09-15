import React from 'react';

import { Button } from 'antd-mobile';

import './index.less';

function Index(props) {
  return <div className='home-box'>
    <Button type='primary' onClick={()=>{window.history.back()}}>返回</Button>
  </div>
}

export default Index;