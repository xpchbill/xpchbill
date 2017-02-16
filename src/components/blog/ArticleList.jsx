import React from 'react';
import { Link } from 'react-router';
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
  const categories = data.get('categories');

  return (
    <div className="article-list-item" key={path}>
      <h3><Link to={path}>{title}</Link></h3>
      {
        categories.size ? <div>
          {
            categories.map(cat => <span className="label-blog-category" key={cat}>{cat}</span>)
          }
        </div> : null
      }
      <p className="post-author-date ms-fontSize-s">{`Posted by ${config.author} on ${date}`}</p>
      <div className="post-body">
        {
          truncate(body.replace(/<[^>]*>/g, ''), {
            length: 120, omission: ' ...', separator: /,? +/
          })
        }
      </div>
    </div>
  );
};

export default class ArticleList extends React.PureComponent {

  render() {
    const { pages, categories } = this.props;
    const selectedCategoriesNames = categories.filter(cat => cat.get('selected')).map(cat => cat.get('name'));

    return (
      <div className="article-list">
        {
          pages.filter((page) => {
            const cats = page.getIn(['data', 'categories']);
            return cats.find(cat => selectedCategoriesNames.find(c => c === cat));
          }).map(page => getArticleItem(page))
        }
      </div>
    );
  }
}
