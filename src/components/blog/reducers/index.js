import { fromJS } from 'immutable';
import reducerHandler from 'redux/utils/reducerHandler';

import { parsePCT, filterPCT } from './helper';

import {
  ACCEPT_BLOG_PAGES,
  ON_TAG_CHANGE,
  ON_CATEGORY_CHANGE
} from '../actions';

const initialState = fromJS({
  entities: fromJS({
    pages: fromJS([])
  }),
  pages: fromJS([]),
  tags: fromJS([]),
  categories: fromJS([])
});

const handlers = {

  [ACCEPT_BLOG_PAGES](state, { payload: { pages } }) {
    return state.withMutations((s) => {
      const { sortedPages, tags, categories } = parsePCT(fromJS(pages));
      s.setIn(['entities', 'pages'], sortedPages);
      s.set('pages', sortedPages);
      s.set('tags', tags.toList());
      s.set('categories', categories.toList());
    });
  },

  [ON_TAG_CHANGE](state, { payload: { index, selected } }) {
    return state.withMutations((s) => {
      s.setIn(['tags', index, 'selected'], selected || false);
      const { pages, tags } = filterPCT(s.getIn(['entities', 'pages']), s.get('categories'), s.get('tags'));
      s.set('tags', tags);
      s.set('pages', pages);
    });
  },

  [ON_CATEGORY_CHANGE](state, { payload: { index, selected } }) {
    return state.withMutations((s) => {
      s.setIn(['categories', index, 'selected'], selected || false);
      const { pages, tags } = filterPCT(s.getIn(['entities', 'pages']), s.get('categories'), s.get('tags'));
      s.set('tags', tags);
      s.set('pages', pages);
    });
  }

};

export default reducerHandler(initialState, handlers);
