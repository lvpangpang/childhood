import request from '@/untils/request';
import API from '@/config/api';

export function getList(index?: Number) {
  return async (dispatch, getSate) => {
    const pageIndex = index || getSate()['home']['pageIndex'];
    const data = await request({
      url: API.dailyList,
      params: {
        pageIndex: pageIndex,
        pageSize: 10
      }
    });
    dispatch({
      type: 'getList',
      data
    });
  }
}

export function getUserInfo() {
  return async (dispatch, getSate) => {
    const data = await request({
      url: API.getUser
    });
    dispatch({
      type: 'getUserInfo',
      data
    });
  }
}