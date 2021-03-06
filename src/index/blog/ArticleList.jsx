import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
// import truncate from 'lodash/truncate';
// eslint-disable-next-line
import { config } from 'config';

import ArticleMeta from 'shared/components/ArticleMeta';

import './ArticleList.scss';

// <div className="post-body">
//   {
//     truncate(body.replace(/<[^>]*>/g, ''), {
//       length: 110, omission: ' ...', separator: /,? +/
//     })
//   }
// </div>

const getArticleItem = (page) => {
  const path = page.get('path');
  const data = page.get('data');
  const title = data.get('title');
  const date = data.get('date');
  // const body = data.get('body');
  const tags = data.get('tags');
  const categories = data.get('categories');

  return (
    <div className="article-list-item" key={path}>
      <div className="ms-Grid">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg3">
            <span className="post-info-date">{`${moment(date).format('MM/DD/YYYY H:MM')}`}</span>
          </div>
          <div className="ms-Grid-col ms-u-sm12 ms-u-md8 ms-u-lg9">
            <h2><Link to={path}>{title}</Link></h2>
            <div className="post-info ms-fontSize-m">
              <ArticleMeta categories={categories} tags={tags} />
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
