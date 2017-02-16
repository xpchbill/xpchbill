export const ACCEPT_BLOG_PAGES = 'site/global/ACCEPT_BLOG_PAGES';
export const ON_CATEGORY_CHANGE = 'site/global/ON_CATEGORY_CHANGE';

export const acceptBlogPagesAction = pages => ({
  type: ACCEPT_BLOG_PAGES,
  payload: {
    pages
  }
});

export const onCategoryChangeAction = (index, selected) => ({
  type: ON_CATEGORY_CHANGE,
  payload: {
    index,
    selected
  }
});
