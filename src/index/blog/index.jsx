import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import classnames from 'classnames';
import { Panel } from 'office-ui-fabric-react/lib/Panel';

/* eslint-disable */
import { config } from 'config';
/* eslint-enable */

import Header from 'shared/components/Header';
import SliderNav from 'shared/components/SliderNav';
import Copyright from 'shared/components/Copyright';
import SocialNetworks from 'shared/components/SocialNetworks';

import 'shared/assets/images/desktop5.png';

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
    // this.props.resetBlogPagesAction();
  }

  showPanel() {
    this.setState({ showPanel: true });
  }

  closePanel() {
    this.setState({ showPanel: false });
  }

  render() {
    const { pages, tags, categories } = this.props;
// debugger;
    return (
      <div className="blog">
        <Helmet title={`${config.siteTitle} | blog`} />
        <Header />
        <SliderNav />
        <div className="blog-main layout-limit-with ms-u-scaleUpIn100">
          {
            global.document ?
              <Panel
                isOpen={this.state.showPanel}
                isLightDismiss
                onDismiss={() => this.closePanel()}
              >
                <div className="fabric-categories-tags">
                  <ArticleCategories categories={categories} />
                  <ArticleTags tags={tags} />
                </div>
              </Panel> : null
          }
          <div className="blog-statistics ms-Grid">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-u-sm10 ms-u-md10 ms-u-lg10">
                {'文章数: '}{pages.size}
              </div>
              <div className="ms-Grid-col ms-u-sm2 ms-u-md2 ms-u-lg2 blog-stc-bars">
                <span
                  className="filter-icon"
                  onClick={() => this.showPanel()}
                  title="文章类型和标签过滤"
                >
                  <i
                    className={classnames('icon', 'icon-filter', {
                      'ms-fontColor-red': categories.some(cat => !cat.get('selected')) ||
                                                 tags.some(tg => !tg.get('selected'))
                    })}
                  />
                </span>
              </div>
            </div>
          </div>
          <ArticleList pages={pages} tags={tags} categories={categories} />
          <SocialNetworks />
          <Copyright />
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
