import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import store, { finalHistory } from './src/redux/store';

exports.replaceDOMRenderer = ({ routes, onUpdate }) => (
    ReactDOM.render(// eslint-disable-line
      <Provider store={store}>
        <Router
          history={finalHistory}
          routes={routes}
          onUpdate={onUpdate}
        />
      </Provider>,
      typeof window !== 'undefined' ? document.getElementById('react-mount') : void 0)// eslint-disable-line
);
