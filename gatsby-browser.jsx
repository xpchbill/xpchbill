import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import useScroll from 'react-router-scroll/lib/useScroll';
import { applyRouterMiddleware, Router } from 'react-router';
import store, { finalHistory } from './src/shared/redux/store';

exports.replaceDOMRenderer = ({ routes, defaultShouldUpdateScroll, onUpdate }) => (
    ReactDOM.render(// eslint-disable-line
      <Provider store={store}>
        <Router
          history={finalHistory}
          routes={routes}
          onUpdate={onUpdate}
          render={applyRouterMiddleware(useScroll(defaultShouldUpdateScroll))}
        />
      </Provider>,
      typeof window !== 'undefined' ? document.getElementById('react-mount') : null)
);
