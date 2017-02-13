import React from 'react';

import './Article.scss';

export default class Article extends React.Component {
  render() {
    const { route: { page: { data } } } = this.props;

    return (
      <div className="article article-container">
        <h1>{data.title}</h1>
        <div className="article-body" dangerouslySetInnerHTML={{ __html: data.body }} />
      </div>
    );
  }
}
