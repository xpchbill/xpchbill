import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import Headroom from 'react-headroom';

/* eslint-disable */
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
/* eslint-enable */

import './index.scss';

export default class Header extends React.PureComponent {

  static getNameLogo() {
    return <div className="header-logo"><strong>{'BILL.'}</strong>{'XIONG'}</div>;
  }

  static getNavigation() {
    return (
      <ul className="header-nav">
        <li><Link to={prefixLink('/')} title="Home page">Home</Link></li>
        <li><Link to={prefixLink('/blog/')} title="My articles" activeClassName="active">Blog</Link></li>
        <li><Link to={prefixLink('/life/')} title="My life" activeClassName="active">Life</Link></li>
        <li><Link to={prefixLink('/about/')} title="About me" activeClassName="active">About</Link></li>
      </ul>
    );
  }

  render() {
    const { className } = this.props;

    return (
      <Headroom>
        <div className={classnames('header', className)} >
          <div className="layout-limit-with">
            {this.constructor.getNameLogo()}
            {this.constructor.getNavigation()}
          </div>
        </div>
      </Headroom>
    );
  }
}
