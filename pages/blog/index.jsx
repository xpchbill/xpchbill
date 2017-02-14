import React from 'react';
import hasIn from 'lodash/hasIn';
import union from 'lodash/union';
import sortBy from 'lodash/sortBy';
import includes from 'lodash/includes';
import Blog from '../../src/components/blog';

export default class LandingBlog extends React.Component {

  static propTypes = {
    route: React.PropTypes.shape({}).isRequired
  }

  getBlogPosts() {
    const { route: { pages } } = this.props;
    const blogPages = pages.filter(page => includes(page.data.tags, 'blog'));
    let categories = [];
    const sortedPages = sortBy(blogPages, (page) => {
      categories = union(categories, page.data.categories || []);
      return hasIn(page, 'data.date') ? page.data.date : undefined;
    }).reverse();
    return {
      pages: sortedPages,
      categories
    };
  }

  render() {
    const { pages, categories } = this.getBlogPosts();
    return <Blog {...this.props} pages={pages} categories={categories} />;
  }
}
