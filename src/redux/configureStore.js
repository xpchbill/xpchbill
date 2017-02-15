import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import middlewares from './middlewares';
import rootReducer from './reducers';

export default (initialState = {}, history) => {
  const middlewareList = [...middlewares, routerMiddleware(history)];
  const middleware = composeWithDevTools(applyMiddleware(...middlewareList));

  const store = middleware(createStore)(rootReducer, initialState);

  if (module && module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers')); // eslint-disable-line global-require
    });
  }

  return store;
};
