import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import blog from '../../components/blog/reducers';

const rootReducer = combineReducers({
  routing: routerReducer,
  blog: (state = {}) => state
});

export default rootReducer;
