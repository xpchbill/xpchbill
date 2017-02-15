import React from 'react';
import Helmet from 'react-helmet';
// eslint-disable-next-line
import { config } from 'config';
import Article from '../src/components/blog/Article';

import '../src/styles/markdown.scss';

export default class MarkdownWrapper extends React.Component {
  render() {
    const { route: { page: { data } } } = this.props;

    return (
      <div className="markdown">
        <Helmet
          title={`${config.siteTitle} | ${data.title}`}
        />
        <Article {...this.props} />
      </div>
    );
  }
}
