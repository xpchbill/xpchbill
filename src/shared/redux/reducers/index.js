import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import blog from 'index/blog/reducers';

const rootReducer = combineReducers({
  routing: routerReducer,
  blog
});

export default rootReducer;
