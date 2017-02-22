import React from 'react';
import moment from 'moment';
import SocialNetworks from 'shared/components/SocialNetworks';
// eslint-disable-next-line
import { config } from 'config';

import './Article.scss';

export default class Article extends React.Component {
  render() {
    const { route: { page: { data } } } = this.props;

    return (
      <div className="article article-container">
        <div className="article-header">
          <h4>BILL XIONG</h4>
          <SocialNetworks styles={{ fontSize: '18px' }} />
        </div>
        <div className="article-body">
          <h1>{data.title}</h1>
          {
            data.categories ?
              <p className="post-author-date ms-fontSize-s">
                {`${moment(data.date).format('YYYY-MM-DD H:MM')}`}
                <span>{' | '}</span>
                <b>Categories: </b>
                {`${data.categories}`}
                <span>{' | '}</span>
                <b>Tags: </b>
                {`${data.tags.join(', ')}`}
              </p> : null
          }
          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: data.body }} />
        </div>
      </div>
    );
  }
}
