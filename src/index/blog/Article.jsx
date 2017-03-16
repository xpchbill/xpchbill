import React from 'react';
import moment from 'moment';
// eslint-disable-next-line
import { config } from 'config';

import ArticleMeta from 'shared/components/ArticleMeta';

import './Article.scss';

export default class Article extends React.Component {
  render() {
    const { route: { page: { data } } } = this.props;

    return (
      <div className="article article-container ms-u-slideUpIn20">
        <div className="article-header">
          <h1>{data.title}</h1>
          <ArticleMeta categories={data.categories} tags={data.tags} date={data.date} />
        </div>
        <div className="article-body">
          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: data.body }} />
        </div>
      </div>
    );
  }
}
