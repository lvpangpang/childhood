import React from 'react';
import { Provider } from 'react-redux';

import Router from '@/router';
import store from '@/store';

function App() {
  console.log(abc7897897897897);
  return(
    <Provider store={store}>
      <Router></Router>
    </Provider>     
  );
}

export default App;