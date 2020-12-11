import React, {useState, useEffect, useCallback } from 'react';

import { Button, TextareaItem } from 'antd-mobile';

import request from '@/untils/request';
import API from '@/config/api';
import { queryParams } from '@/untils/common';
import Header from '@/components/Header';
import './index.less';

function Index(props) {
  const [val, setVal] = useState('');
  const [loading, setLoading] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [chooseComment, setChooseComment] = useState(null);

  const [details, setDetails] = useState(null);
  const [comment, setComment] = useState(null);


  const getDetails = useCallback(async () => {
    const data = await request({
      url: API.dailyDetails,
      params: {
        dailyId: queryParams('id')
      }
    });
    setDetails(data);
  }, []);

  const addComment = useCallback(async () => {
    setLoading(true);
    await request({
      method: 'post',
      url: API.commentAdd,
      data: {
        dailyId: queryParams('id'),
        content: val,
        parentId: chooseComment
      }
    });
    setLoading(false);
    setShowComment(false);
    getComment();
    setChooseComment(null);
  }, [val]);

  const getComment = useCallback(async () => {
    const data = await request({
      url: API.commentQuery,
      params: {
        dailyId: queryParams('id')
      }
    });
    setComment(data);
  }, []);

  useEffect(() => {
    getDetails();
    getComment();
  }, [])

  return( 
    <div className='detail-box'>
      <Header 
        title='详情'
      ></Header>

      {/* 图片 */}
      <div className='file-box'>
        {
          details && details['fileList'].map((item) => {
            return <div key={item['url']} className='file-item'><img src={item['url']}/></div>
          })
        }
      </div>

      <div>
        <Button type='primary' onClick={() => {setShowComment(true)}}>评论</Button>
      </div>

      {/* 评论 */}
      <div className='comment-box'>
        {
          comment && comment.map((item) => {
            return <div className='comment-item' key={item['commentId']}>
              <div className='user-info'>
                <div className='head'><img src={item['head']} /></div>
                <div className='name'>{item['name']}</div>
              </div>
              <div className='content' onClick={() => {setShowComment(true);setChooseComment(item['commentId'])}}>{item['content']}</div>
              <div className='son-box'>
                {
                  item['son'] && item['son'].map((item1) => {
                    return <div className='son-item'>
                      <div className='user-info'>
                        <div className='name'>{item1['name']}</div>
                      </div>
                      <div className='content'>{item1['content']}</div>
                    </div>
                  })
                }
              </div>
            </div>
          })
        }
      </div>
      
      {/* 评论输入框 */}
      {
        showComment && 
        <div className='add-comment'>
          <div className='bg-box' onClick={() => {setShowComment(false)}}></div>
          <div className='add-main'>
            <TextareaItem rows={10} count={140} placeholder='请输入您的评论' value={val} onChange={(val) => {setVal(val.trim())}}></TextareaItem>
            <Button type='primary' onClick={addComment} loading={loading}>提交</Button>
          </div>
        </div> 
      }

    </div>
  )
}

export default Index;