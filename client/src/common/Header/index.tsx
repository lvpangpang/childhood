import React from 'react';
import './index.less';


interface Prop {
  name: string,
  right?: string
}

function Header(prop: Prop) {
  const {
    name,
    right
  } = prop;
  return (
    <div className='header'>
      <div></div>
      <div>{name}</div>
      <div>{right}</div>
    </div>
  );

}

export default Header;
