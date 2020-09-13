import React from 'react';
import { Link } from 'react-router-dom';

function Index() {
  return <>
    <p>首页</p>
    <Link to='/details'>详情</Link>
  </>
}
export default Index;