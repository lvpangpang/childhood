import React, { useState } from 'react';

import request from '@/untils/request';
import API from '@/config/api';
import './index.less';
import { Button, Toast } from 'antd-mobile';
import Item from 'antd-mobile/lib/popover/Item';

interface Prop {
  cancelHandle: Function
}

function Upload(prop: Prop) {

  const { cancelHandle } = prop;

  const [showPublish, setShowPublish] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);

  const upload =  async(e) => {
    const files = e.target.files;
    setLoading(true);
    try {
      const res = [];
      for(var k=0; k<files.length; k++) {
        const formData = new FormData();
        formData.append('file', files[k]);
        const data = await request({
          method: 'post',
          url: API.upload,
          data: formData
        });
        res.push(data)
      }
      setShowPublish(true);
      setFileList(res);
      setLoading(false);
    } catch(err) {
      setLoading(false);
    }
  };

  const del = (index) => {
    const temp = fileList.slice(0);
    temp.splice(index, 1);
    setFileList(temp);
  };

  const submit = async () => {
    setLoading(true);
    const data = await request({
      method: 'post',
      url: API.dailyAdd,
      data: {
        fileList: JSON.stringify(fileList)
      }
    });
    Toast.success('添加成功');
    setLoading(false);
    cancelHandle();
  };

  return (
    <div className={!showPublish ? 'com-upload': 'com-upload publish-upload'}>
      <div className='close' onClick={cancelHandle}>
        <svg t="1600675796436" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1263" width="16" height="16"><path d="M512 421.504l274.752-274.752 90.496 90.496L602.496 512l274.752 274.752-90.496 90.496L512 602.496l-274.752 274.752-90.496-90.496L421.504 512 146.752 237.248l90.496-90.496z" p-id="1264"></path></svg>
      </div>
      {
        !showPublish ?  <Button type='primary' className='button' loading={loading}>
        <input type='file' multiple className='input' onChange={upload} />
        上传图片或者视频
      </Button> : <div className='publish-box'>
        <div className='file-list'>{
          fileList.map((item, index) => {
            return <div className='upload-item' key={item.url}>
              <img src={item.url}></img>
              <p onClick={() => {del(index)}}>删除</p>
            </div>
          })
        }</div>
        <Button type='primary' className='button' loading={loading} onClick={submit}>发布</Button>
      </div>
      }
    </div>
  );

}

export default Upload;