export const ACCEPT_BLOG_PAGES = 'site/global/ACCEPT_BLOG_PAGES';
export const ON_CHANGE_TAG = 'site/global/ON_CHANGE_TAG';
export const ON_CHANGE_CATEGORY = 'site/global/ON_CHANGE_CATEGORY';
export const ON_SELECT_ALL_CATEGORIES = 'site/global/ON_SELECT_ALL_CATEGORIES';
export const ON_SELECT_ALL_TAGS = 'site/global/ON_SELECT_ALL_TAGS';

export const acceptBlogPagesAction = pages => ({
  type: ACCEPT_BLOG_PAGES,
  payload: {
    pages
  }
});

export const onChangeCategoryAction = (index, selected) => ({
  type: ON_CHANGE_CATEGORY,
  payload: {
    index,
    selected
  }
});

export const onSelectAllCategoriesAction = (selected) => ({
  type: ON_SELECT_ALL_CATEGORIES,
  payload: {
    selected
  }
});

export const onChangeTagAction = (index, selected) => ({
  type: ON_CHANGE_TAG,
  payload: {
    index,
    selected
  }
});

export const onSelectAllTagsAction = (selected) => ({
  type: ON_SELECT_ALL_TAGS,
  payload: {
    selected
  }
});

export const resetBlogPagesAction = () => (dispatch, getState) => {
  const pages = getState().blog.getIn(['entities', 'pages']);
  return dispatch(acceptBlogPagesAction(pages));
};
