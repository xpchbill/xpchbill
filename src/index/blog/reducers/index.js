import { fromJS } from 'immutable';
import reducerHandler from 'shared/redux/utils/reducerHandler';

import { parsePCT, filterPCT } from './helper';

import {
  ACCEPT_BLOG_PAGES,
  ON_CHANGE_CATEGORY,
  ON_SELECT_ALL_CATEGORIES,
  ON_CHANGE_TAG,
  ON_SELECT_ALL_TAGS
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
      s.set('tags', tags.sort().toList());
      s.set('categories', categories.sort().toList());
    });
  },

  [ON_CHANGE_CATEGORY](state, { payload: { index, selected } }) {
    return state.withMutations((s) => {
      s.setIn(['categories', index, 'selected'], selected || false);
      const { pages, tags } = filterPCT(s.getIn(['entities', 'pages']), s.get('categories'), s.get('tags'));
      s.set('tags', tags);
      s.set('pages', pages);
    });
  },

  [ON_SELECT_ALL_CATEGORIES](state, { payload: { selected } }) {
    return state.withMutations((s) => {
      s.set('categories', s.get('categories').map(cat => cat.set('selected', selected || false)));
      const { pages, tags } = filterPCT(s.getIn(['entities', 'pages']), s.get('categories'), s.get('tags'));
      s.set('tags', tags);
      s.set('pages', pages);
    });
  },

  [ON_CHANGE_TAG](state, { payload: { index, selected } }) {
    return state.withMutations((s) => {
      s.setIn(['tags', index, 'selected'], selected || false);
      const { pages, tags } = filterPCT(s.getIn(['entities', 'pages']), s.get('categories'), s.get('tags'));
      s.set('tags', tags);
      s.set('pages', pages);
    });
  },

  [ON_SELECT_ALL_TAGS](state, { payload: { selected } }) {
    return state.withMutations((s) => {
      s.set('tags', s.get('tags').map(cat => cat.set('selected', selected || false)));
      const { pages, tags } = filterPCT(s.getIn(['entities', 'pages']), s.get('categories'), s.get('tags'));
      s.set('tags', tags);
      s.set('pages', pages);
    });
  }

};

export default reducerHandler(initialState, handlers);
