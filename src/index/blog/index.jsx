import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import { StickyContainer, Sticky } from 'react-sticky';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';

/* eslint-disable */
import { config } from 'config';
/* eslint-enable */

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
          <FaviconMe className="blog-faviconme" styles={{ width: '120px', height: '120px', boxShadow: '0px 1px 1px 0px #bbb' }}>
            <div className="blog-icon-me-info">
              <h4>BILL XIONG</h4>
            </div>
          </FaviconMe>
        </Cover>
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
          <p className="blog-statistics">{'Total count: '}{pages.size}</p>
          <ArticleList pages={pages} tags={tags} categories={categories} />
        </div>
        <Button description="Opens the Sample Panel" onClick={() => this.showPanel()}>Open Panel</Button>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
