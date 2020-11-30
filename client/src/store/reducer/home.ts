const initialState = {
  pageIndex: 1,
  pageSize: 10,
  hasMore: true,
  list: []
}

const reducerMap = {
  getList: (state, action) => {
    const  { data }  = action;
    const { pageIndex, pageSize, total } = data;
    return {
      pageIndex: state.pageIndex + 1,
      hasMore: pageIndex * pageSize < total,
      list: data['list']
    }
  }
};

export default function home(state = initialState, action) {
  const reduceFn = reducerMap[action.type]
  if (!reduceFn) {
    return state
  }
  return { ...state, ...reduceFn(state, action) }
}
