import { fromJS } from 'immutable';
import reducerHandler from 'redux/utils/reducerHandler';

import {
  ACCEPT_BLOG_PAGES
} from '../actions';

const initialState = fromJS({
  pages: fromJS([]),
  categories: fromJS([])
});

const handlers = {

  [ACCEPT_BLOG_PAGES](state, { payload: { pages } }) {
    return state.withMutations((s) => {
      let categories = fromJS([]);
      s.set('pages', fromJS(pages).sortBy((page) => {
        categories = categories.merge(page.getIn(['data', 'categories']));
        const date = page.getIn(['data', 'date']);
        return date;
      }).reverse());
      s.set('categories', categories);
    });
  }

};

export default reducerHandler(initialState, handlers);
