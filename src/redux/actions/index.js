export const ADD_POSTED_PAGES = 'site/global/ADD_POSTED_PAGES';

export const addPostedPagesAction = (moduleName, typeName) => ({
  type: ADD_POSTED_PAGES,
  payload: {
    moduleName, typeName
  }
});

export const testAction = () => {

};
