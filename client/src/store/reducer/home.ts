const initialState = {
  pageIndex: 1,
  pageSize: 10,
  list: []
}

const reducerMap = {
  'getList': (state, action) => {
    const  { data }  = action;
    return {
      pageIndex: state.pageIndex+1,
      list: data
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
