import React from 'react';
import { connect } from 'react-redux';
// import { StickyContainer, Sticky } from 'react-sticky';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';

import ArticleList from './ArticleList';
import ArticleCategories from './ArticleCategories';
import ArticleTags from './ArticleTags';

import './index.scss';

export class Blog extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      showPanel: false
    };
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
        <div className="blog-main">
          <Button description="Opens the Sample Panel" onClick={() => this.showPanel()}>Open Panel</Button>
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
          <ArticleList pages={pages} tags={tags} categories={categories} />
        </div>
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

  }
)(Blog);
