import React from 'react';
import { Link } from 'react-router';
/* eslint-disable */
import { prefixLink } from 'gatsby-helpers';
import DocumentTitle from 'react-document-title';
import { config } from 'config';
/* eslint-enable */

import '../../styles/base.scss';

export default class Home extends React.Component {
  render() {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div className="page home">
          <main>
            <h1>
              Bill Xiong
            </h1>
            <p className="tagline quoted">{config.tagLine}</p>
            <div className="logo" />
            <ul className="nav">
              <li><Link to={prefixLink('/blog/')} title="Articles">Blog</Link></li>
              <li><Link to={prefixLink('/life/')} title="My life">Life</Link></li>
              <li><Link to={prefixLink('/about/')} title="About me">About</Link></li>
            </ul>
          </main>
        </div>
      </DocumentTitle>
    );
  }
}
