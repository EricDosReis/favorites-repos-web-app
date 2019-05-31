import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <h1>Yes</h1>
    </Provider>
  );
}

export default App;
