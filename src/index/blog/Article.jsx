import React from 'react';
import moment from 'moment';
// eslint-disable-next-line
import { config } from 'config';

import './Article.scss';

export default class Article extends React.Component {
  render() {
    const { route: { page: { data } } } = this.props;

    return (
      <div className="article article-container">
        <h1>{data.title}</h1>
        {
          data.categories ?
            <p className="post-author-date ms-fontSize-s">
              {`时间: ${moment(data.date).format('YYYY-MM-DD H:MM')}`}
              <span>{' | '}</span>
              {`分类: ${data.categories}`}
              <span>{' | '}</span>
              {`标签: ${data.tags.join(', ')}`}
            </p> : null
        }
        <div className="article-body" dangerouslySetInnerHTML={{ __html: data.body }} />
      </div>
    );
  }
}
