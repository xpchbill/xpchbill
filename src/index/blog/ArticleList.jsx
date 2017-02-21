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
      <div className="ms-Grid">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-lg3">
            <span className="post-info-date">{`${moment(date).format('MM/DD/YYYY H:MM')}`}</span>
          </div>
          <div className="ms-Grid-col ms-u-lg9">
            <h2><Link to={path}>{title}</Link></h2>
            <div className="post-body">
              {
                truncate(body.replace(/<[^>]*>/g, ''), {
                  length: 160, omission: ' ...', separator: /,? +/
                })
              }
            </div>
            <div className="post-info ms-fontSize-m">
              <span><b>分类: </b>{`${categories.join(',')}`}</span>
              <span className="post-info-split">{' | '}</span>
              <span><b>标签: </b>{`${tags.join(', ')}`}</span>
            </div>
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
