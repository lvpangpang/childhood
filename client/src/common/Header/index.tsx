import React from 'react';
import { withRouter } from "react-router-dom";

import './index.less';

interface Prop {
  title: string,
  right?: string,
  rightClick?: Function
}

function Header(prop: Prop) {
  const {
    title,
    right,
    rightClick
  } = prop;

  const goBack = () => {
    prop.history.goBack();
  };
  return (
    <div className='com-header'>
      <div className='back-btn' onClick={goBack}>
        <svg t="1600568542455" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3222" width="32" height="32"><path d="M438.4 297.6c12.8 12.8 12.8 28.8 3.2 41.6l-3.2 3.2L300.8 480H800c19.2 0 32 12.8 32 32 0 16-12.8 28.8-28.8 32H300.8l137.6 137.6c12.8 12.8 12.8 28.8 3.2 41.6l-3.2 3.2c-12.8 12.8-28.8 12.8-41.6 3.2l-3.2-3.2-192-192-3.2-3.2-3.2-3.2-3.2-3.2V499.2l3.2-3.2 3.2-3.2 3.2-3.2 192-192c12.8-12.8 32-12.8 44.8 0z" fill="#221814" p-id="3223"></path></svg>
      </div>
      <div className='title'>{title}</div>
      <div className='right' onClick={rightClick}>{right}</div>
    </div>
  );

}

export default withRouter(Header);
