import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers';

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...[]),
    // eslint-disable-next-line no-console
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...[]);

const store = createStore(reducers, composer);

export default store;
