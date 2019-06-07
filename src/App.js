import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';

import GlobalStyle from './styles/global';
import UtilsStyle from './styles/utils';
import store from './store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <UtilsStyle />
    <Routes />
  </Provider>
);

export default App;
