import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'react-router-scroll/lib/useScroll';
import { applyRouterMiddleware, Router, useRouterHistory } from 'react-router';
import { configureStore } from './src/shared/redux/store';

const history = useRouterHistory(createHistory)();
const store = configureStore({}, history);
const finalHistory = syncHistoryWithStore(history, store);

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
