import { fromJS } from 'immutable';
import reducerHandler from 'redux/utils/reducerHandler';

import {
  ACCEPT_BLOG_PAGES,
  ON_CATEGORY_CHANGE
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
      s.set('categories', categories.map(cat => fromJS({ name: cat, selected: true })));
    });
  },

  [ON_CATEGORY_CHANGE](state, { payload: { index, selected } }) {
    return state.withMutations((s) => {
      s.setIn(['categories', index, 'selected'], selected || false);
    });
  }

};

export default reducerHandler(initialState, handlers);
