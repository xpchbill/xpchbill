import React from 'react';
import Blog from '../../src/index/blog';

export default class LandingBlog extends React.Component {

  render() {
    return <Blog {...this.props} />;
  }
}
