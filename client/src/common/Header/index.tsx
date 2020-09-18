import React from 'react';
import Style from './index.less';
console.log(Style);

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
    <div class={Style.header}>
      <div></div>
      <div>{name}</div>
      <div>{right}</div>
    </div>
  );

}

export default Header;
