import React from 'react';
import { connect } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import ArticleList from './ArticleList';
import ArticleCategories from './ArticleCategories';

import './index.scss';

export class Blog extends React.Component {
  render() {
    const { pages, categories } = this.props;

    return (
      <div className="blog">
        <StickyContainer>
          <div className="blog-main ms-Grid">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-u-sm6 ms-u-md8 ms-u-lg8">
                <ArticleList pages={pages} />
              </div>
              <div className="ms-Grid-col ms-u-sm6 ms-u-md4 ms-u-lg4">
                <Sticky topOffset={280}>
                  <ArticleCategories categories={categories} />
                </Sticky>
              </div>
            </div>
          </div>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </StickyContainer>
      </div>
    );
  }
}

export default connect(
  state => ({
    pages: state.blog.get('pages'),
    categories: state.blog.get('categories')
  }), {

  }
)(Blog);
