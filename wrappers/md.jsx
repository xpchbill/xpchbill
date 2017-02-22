import React from 'react';
import Helmet from 'react-helmet';
// eslint-disable-next-line
import { config } from 'config';
import Article from 'index/blog/Article';

import 'shared/styles/markdown.scss';

export default class MarkdownWrapper extends React.Component {
  render() {
    const { route: { page: { data } } } = this.props;
    const dataPlace = data.place ? ` | ${data.place}` : '';
    const dataTitle = data.title ? ` | ${data.title}` : '';
    return (
      <div className="markdown">
        <Helmet title={`${config.siteTitle}${dataPlace}${dataTitle}`} />
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
