import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
/* eslint-disable */
import { prefixLink } from 'gatsby-helpers';
import DocumentTitle from 'react-document-title';
import { config } from 'config';
/* eslint-enable */
import { loadTheme } from '@microsoft/load-themed-styles/lib/index';

import SocialNetworks from 'shared/components/SocialNetworks';

import 'shared/styles/base.scss';
import 'shared/assets/images/me01.jpg';
import './index.scss';

loadTheme({
  themePrimary: '#038387'
});

export class Home extends React.Component {

  render() {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div className="page landing">
          <nav>
            <ul className="nav">
              <li><Link to={prefixLink('/blog/')} title="Articles">Blog</Link></li>
              <li><Link to={prefixLink('/life/')} title="My life">Life</Link></li>
              <li><Link to={prefixLink('/about/')} title="About me">About</Link></li>
            </ul>
          </nav>
          <main>
            <div className="main-content">
              <img src="/assets/images/me01.jpg" alt="Bill Xiong" />
              <h1>BILL XIONG</h1>
              <p>I build stuff. Mostly for the web.</p>
              <SocialNetworks styles={{ fontSize: '42px' }} />
            </div>
          </main>
        </div>
      </DocumentTitle>
    );
  }
}

export default connect(
  null, {}
)(Home);
