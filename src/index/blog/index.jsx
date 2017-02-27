import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Bars from 'react-icons/lib/fa/list-ul';
// import { StickyContainer, Sticky } from 'react-sticky';
import { Panel } from 'office-ui-fabric-react/lib/Panel';

/* eslint-disable */
import { config } from 'config';
/* eslint-enable */

import Nav from 'shared/components/Nav';
import Cover from 'shared/components/Cover';
import FaviconMe from 'shared/components/FaviconMe';
import SocialNetworks from 'shared/components/SocialNetworks';

import ArticleList from './ArticleList';
import ArticleCategories from './ArticleCategories';
import ArticleTags from './ArticleTags';

import { resetBlogPagesAction } from './actions';

import './index.scss';

export class Blog extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      showPanel: false
    };
  }

  componentWillUnmount() {
    this.props.resetBlogPagesAction();
  }

  showPanel() {
    this.setState({ showPanel: true });
  }

  closePanel() {
    this.setState({ showPanel: false });
  }

  render() {
    const { pages, tags, categories } = this.props;

    return (
      <div className="blog">
        <Helmet title={`${config.siteTitle} | blog`} />
        <Cover className="blog-cover" src="/running.jpg">
          <h1>BLOG</h1>
          <FaviconMe className="blog-faviconme" styles={{ width: '100px', height: '100px', boxShadow: '0px 1px 1px 0px #bbb' }}>
            <div className="blog-icon-me-info">
              <h4>BILL XIONG</h4>
            </div>
          </FaviconMe>
        </Cover>
        <Nav />
        <div className="blog-main">
          <Panel
            isOpen={this.state.showPanel}
            isLightDismiss
            onDismiss={() => this.closePanel()}
            headerText="Categories and Tags"
          >
            <div className="fabric-categories-tags">
              <ArticleCategories categories={categories} />
              <ArticleTags tags={tags} />
            </div>
          </Panel>
          <SocialNetworks styles={{ fontSize: '18px' }} />
          <div className="blog-statistics ms-Grid">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-u-md10 ms-u-lg10">
                {'Total count: '}{pages.size}
              </div>
              <div className="ms-Grid-col ms-u-md2 ms-u-lg2 blog-stc-bars">
                <span
                  onClick={() => this.showPanel()}
                  title="Categories and Tags"
                >
                  <Bars />
                </span>
              </div>
            </div>
          </div>
          <ArticleList pages={pages} tags={tags} categories={categories} />
        </div>
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
    resetBlogPagesAction
  }
)(Blog);
