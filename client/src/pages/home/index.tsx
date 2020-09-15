import React from 'react';
import { Link } from 'react-router-dom';

import big from './img/big.png';
import './index.less';

function Index(props) {
  return <div className='home-box'>
    {/* <div>小家</div> */}
    <div className='nav-box'>
      <div>
        <div className='head-img'><img width='80' height='80' src={big} /></div>
        <div className='nick-name'>
          <div>吕肥肥</div>
          <p>2个月10天</p>
        </div>
      </div>
    </div>
    <div className='content-box'>
      <Link to='/detail'>详情</Link>
    </div>
  </div>
}

export default Index;