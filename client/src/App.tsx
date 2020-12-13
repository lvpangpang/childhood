import React from 'react';
import { Provider } from 'react-redux';

import Router from '@/router';
import store from '@/store';

function App() {
  let a = 1;
  return(
    <Provider store={store}>
      <Router></Router>
    </Provider>
  );
}

export default App;