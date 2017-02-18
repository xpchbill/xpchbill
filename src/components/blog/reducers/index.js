import { fromJS } from 'immutable';
import reducerHandler from 'redux/utils/reducerHandler';

import { processPages } from './helper';

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
      const { sortedPages, tags, categories } = processPages(fromJS(pages));
      s.setIn(['entities', 'pages'], sortedPages);
      s.set('pages', sortedPages);
      s.set('tags', tags.toList());
      s.set('categories', categories.toList());
    });
  },

  [ON_TAG_CHANGE](state, { payload: { index, selected } }) {
    return state.withMutations((s) => {
      s.setIn(['tags', index, 'selected'], selected || false);
    });
  },

  [ON_CATEGORY_CHANGE](state, { payload: { index, selected } }) {
    return state.withMutations((s) => {
      s.setIn(['categories', index, 'selected'], selected || false);
      const selectedTagsNames = s.get('tags').filter(tg => tg.get('selected') && !tg.get('disable')).map(tg => tg.get('name'));
      const selectedCategoriesNames = s.get('categories').filter(cat => cat.get('selected')).map(cat => cat.get('name'));
      const filterPages = s.getIn(['entities', 'pages']).filter((page) => {
        const dataCats = page.getIn(['data', 'categories']);
        return dataCats.find(cat => selectedCategoriesNames.find(c => c === cat));
      });
      const { sortedPages, tags, } = processPages(fromJS(filterPages));
      s.set('tags', s.get('tags').map((tg) => {
        let tage = tg;
        if (tags.get(tg.get('name'))) {
          tage = tage.set('count', tags.getIn([tg.get('name'), 'count']));
          tage = tage.set('disable', false);
        } else {
          tage = tage.set('count', 0);
          tage = tage.set('disable', true);
        }
        return tage;
      }));
      s.set('pages', sortedPages);
    });
  }

};

export default reducerHandler(initialState, handlers);
