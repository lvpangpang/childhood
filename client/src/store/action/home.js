import request from '@/untils/request';
import API from '@/config/api';

export function getList() {
  return async (dispatch, getSate) => {
    const { pageIndex } = getSate()['home']; 
    const data = await request({
      url: API.dailyList,
      params: {
        pageIndex: pageIndex,
        pageSize: 100
      }
    });
    dispatch({
      type: 'getList',
      data: data['list']
    })
  }
}