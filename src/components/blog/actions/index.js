export const ACCEPT_BLOG_PAGES = 'site/global/ACCEPT_BLOG_PAGES';

export const acceptBlogPagesAction = pages => ({
  type: ACCEPT_BLOG_PAGES,
  payload: {
    pages
  }
});
