import React from 'react';
import moment from 'moment';

import './index.scss';

export default class ArticleMeta extends React.PureComponent {
  getPostDate() {
    const { date } = this.props;
    return date ?
      <dl className="article-meta-postdate">
        <dt>发布于：</dt>
        <dd>{`${moment(date).format('YYYY-MM-DD H:MM')}`}</dd>
      </dl> : null;
  }

  getCategories() {
    const { categories } = this.props;
    return categories ?
      <dl className="article-meta-categories">
        <dt>分类于：</dt>
        {
          categories.map(cat => <dd key={cat}>{cat}</dd>)
        }
      </dl> : null;
  }

  getTags() {
    const { tags } = this.props;
    return tags ?
      <dl className="article-meta-tags">
        <dt>标签：</dt>
        {
          tags.map((tg, i) => <dd key={tg}>{tg}</dd>)
        }
      </dl> : null;
  }

  render() {
    const { date } = this.props;
    return (
      <div className="article-meta">
        {this.getPostDate()}
        {this.getCategories()}
        {this.getTags()}
      </div>
    );
  }
}
