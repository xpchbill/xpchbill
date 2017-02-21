import React from 'react';
import moment from 'moment';
import Cover from 'shared/components/Cover';
import FaviconMe from 'shared/components/FaviconMe';
// eslint-disable-next-line
import { config } from 'config';

import './Article.scss';

export default class Article extends React.Component {
  render() {
    const { route: { page: { data } } } = this.props;

    return (
      <div className="article article-container">
        <Cover className="blog-cover" src="/running.jpg">
          <h1>BLOG</h1>
          <FaviconMe className="blog-faviconme" styles={{ width: '120px', height: '120px', boxShadow: '0px 1px 1px 0px #bbb' }}>
            <div className="blog-icon-me-info">
              <h3>BILL XIONG</h3>
            </div>
          </FaviconMe>
        </Cover>
        <div className="article-body">
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
          <h1>{data.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.body }} />
        </div>
      </div>
    );
  }
}
