import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import store, { finalHistory } from './src/redux/store';

// exports.wrapRootComponent = Root => (
//   <Provider store={store}>
//     <Root history={finalHistory} />
//   </Provider>
// );

exports.replaceDOMRenderer = ({ routes, onUpdate }) => (
    ReactDOM.render(// eslint-disable-line
      <Provider store={store}>
        <Router
          history={finalHistory}
          routes={routes}
          onUpdate={onUpdate}
        />
      </Provider>,
      typeof window !== 'undefined' ? document.getElementById('react-mount') : null)
);
