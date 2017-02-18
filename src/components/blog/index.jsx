import React from 'react';
import { connect } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import ArticleList from './ArticleList';
import ArticleCategories from './ArticleCategories';
import ArticleTags from './ArticleTags';

import './index.scss';

export class Blog extends React.PureComponent {
  render() {
    const { pages, tags, categories } = this.props;

    return (
      <div className="blog">
        <StickyContainer>
          <div className="blog-main ms-Grid">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-u-sm6 ms-u-md8 ms-u-lg8">
                <ArticleList pages={pages} tags={tags} categories={categories} />
              </div>
              <div className="ms-Grid-col ms-u-sm6 ms-u-md4 ms-u-lg4">
                <Sticky topOffset={280}>
                  <ArticleCategories categories={categories} />
                  <ArticleTags tags={tags} />
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
    tags: state.blog.get('tags'),
    categories: state.blog.get('categories')
  }), {

  }
)(Blog);
