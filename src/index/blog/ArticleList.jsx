import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import truncate from 'lodash/truncate';
// eslint-disable-next-line
import { config } from 'config';

import './ArticleList.scss';

const getArticleItem = (page) => {
  const path = page.get('path');
  const data = page.get('data');
  const title = data.get('title');
  const date = data.get('date');
  const body = data.get('body');
  const tags = data.get('tags');
  const categories = data.get('categories');

  return (
    <div className="article-list-item" key={path}>
      <h2><Link to={path}>{title}</Link></h2>
      <div className="post-body">
        {
          truncate(body.replace(/<[^>]*>/g, ''), {
            length: 120, omission: ' ...', separator: /,? +/
          })
        }
      </div>
      <div className="post-info ms-fontSize-s ms-Grid">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-lg6">
            <span>{`时间: ${moment(date).format('YYYY-MM-DD H:MM')}`}</span>
            <span className="post-info-split">{' | '}</span>
            <span>{`分类: ${categories.join(',')}`}</span>
          </div>
          <div className="ms-Grid-col ms-u-lg6 ms-u-textAlignRight">
            <span >{`标签: ${tags.join(', ')}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default class ArticleList extends React.PureComponent {

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
