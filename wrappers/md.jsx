import React from 'react';
import Helmet from 'react-helmet';
// eslint-disable-next-line
import { config } from 'config';
import Article from 'index/blog/Article';

import 'shared/styles/markdown.scss';

export default class MarkdownWrapper extends React.Component {
  render() {
    const { route: { page: { data } } } = this.props;
// debugger;
    return (
      <div className="markdown">
        <Helmet
          title={`${config.siteTitle} | ${data.title}`}
        />
        {
          (() => {
            switch (data.place) {
              case 'blog':
                return <Article {...this.props} />;
              default:
                return <div className="unidentified-md" dangerouslySetInnerHTML={{ __html: data.body }} />;
            }
          })()
        }
      </div>
    );
  }
}
