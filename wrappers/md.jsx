import React from 'react';
import Helmet from 'react-helmet';
// eslint-disable-next-line
import { config } from 'config';
import Article from 'index/blog/Article';

import Header from 'shared/components/Header';
import SliderNav from 'shared/components/SliderNav';
import SocialNetworks from 'shared/components/SocialNetworks';
import Copyright from 'shared/components/Copyright';

import 'shared/styles/markdown.scss';

export default class MarkdownWrapper extends React.Component {
  render() {
    const { route: { page: { data } } } = this.props;
    const dataPlace = data.place ? ` | ${data.place}` : '';
    const dataTitle = data.title ? ` | ${data.title}` : '';
    return (
      <div className="markdown">
        <Helmet title={`${config.siteTitle}${dataPlace}${dataTitle}`} />
        <Header />
        <SliderNav />
        <div className="layout-limit-with">
          {
            (() => {
              switch (data.place) {
                case 'blog':
                  return <Article {...this.props} />;
                default:
                  return <div className="unidentified-md ms-u-slideUpIn20" dangerouslySetInnerHTML={{ __html: data.body }} />;
              }
            })()
          }
          <SocialNetworks styles={{ fontSize: '22px' }} />
          <Copyright />
        </div>
      </div>
    );
  }
}
