import React from 'react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'react-router';
import { configureStore } from './src/shared/redux/store';

const history = createMemoryHistory();
const store = configureStore({}, history);

exports.wrapRootComponent = Root => () => (
  <Provider store={store}>
    <Root />
  </Provider>
);
