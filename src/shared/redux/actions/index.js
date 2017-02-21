import { fromJS } from 'immutable';
import { acceptBlogPagesAction } from 'index/blog/actions';

export const ACCEPT_BLOG_PAGES = 'site/global/ACCEPT_BLOG_PAGES';

export const parsePostedPages = pages => (dispatch) => {
  fromJS(pages).groupBy((p) => {
    const place = p.getIn(['data', 'place']);
    return place || 'otherPages';
  }).forEach((_pages, place) => {
    switch (place) {
      case 'blog':
        dispatch(acceptBlogPagesAction(_pages));
        break;
      default:
        break;
    }
  });
};

export const testAction = () => {

};
