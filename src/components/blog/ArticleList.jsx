import React from 'react';
import { Link } from 'react-router';
import truncate from 'lodash/truncate';
// eslint-disable-next-line
import { config } from 'config';

import './ArticleList.scss';

const getArticleItem = page => (
  <div className="article-list-item" key={page.path}>
    <h3><Link to={page.path}>{page.data.title}</Link></h3>
    <p className="post-author-date ms-fontSize-s">{`Posted by ${config.author} on ${page.data.date}`}</p>
    <div className="post-body">
      {
        truncate(page.data.body.replace(/<[^>]*>/g, ''), {
          length: 120, omission: ' ...', separator: /,? +/
        })
      }
    </div>
  </div>
);

export default class ArticleList extends React.Component {

  render() {
    const { pages } = this.props;

    return (
      <div className="article-list">
        {
          pages.map(page => getArticleItem(page))
        }
      </div>
    );
  }
}
