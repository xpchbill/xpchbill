import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import Headroom from 'react-headroom';
import FaviconMe from 'shared/components/FaviconMe';

/* eslint-disable */
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
/* eslint-enable */

import './index.scss';

export default class Header extends React.PureComponent {

  static getNameLogo() {
    return <div className="header-logo"><FaviconMe styles={{ minWidth: '52px', minHeight: '52px' }} /><span><strong>{'BILL.'}</strong>{'XIONG'}</span></div>;
  }

  constructor(props) {
    super(props);
    this.state = {
      mobialMenuOpen: false
    };
  }

  componentDidMount() {
    this.handleResizeWrapper = () => this.handleResize();
    window.addEventListener('resize', this.handleResizeWrapper);
  }

  componentWillUnmount() {
    this.unfixBody();
    window.removeEventListener('resize', this.handleResizeWrapper);
  }

  getNavigation() {
    const { mobialMenuOpen } = this.state;
    return (
      <div
        onClick={(e) => {
          this.toggleMenuOpen(!mobialMenuOpen);
          e.stopPropagation();
          e.preventDefault();
        }}
        className={classnames('header-nav', { 'mobial-menu-open': mobialMenuOpen })}
      >
        <ul>
          <li><Link to={prefixLink('/')} title="Home page">Home</Link></li>
          <li><Link to={prefixLink('/blog/')} title="My articles" activeClassName="active">Blog</Link></li>
          <li><Link to={prefixLink('/life/')} title="My life" activeClassName="active">Life</Link></li>
          <li><Link to={prefixLink('/about/')} title="About me" activeClassName="active">About</Link></li>
        </ul>
      </div>
    );
  }

  handleResize() {
    this.toggleMenuOpen(false);
  }

  toggleMenuOpen(mobialMenuOpen) {
    this.setState({
      mobialMenuOpen
    });
    if (mobialMenuOpen) {
      this.fixBody();
    } else {
      this.unfixBody();
    }
  }
  fixBody = () => {
    const bodyStyles = document.body.style;
    this.bodyOverflowX = bodyStyles.overflowX;
    this.bodyOverflowY = bodyStyles.overflowY;
    this.bodyPaddingRight = bodyStyles.paddingRight;

    // eslint-disable-next-line
    bodyStyles.overflowX = bodyStyles.overflowY = 'hidden';
    window.scrollTo(0, 0);
  }

  unfixBody = () => {
    const bodyStyles = document.body.style;
    bodyStyles.overflowX = this.bodyOverflowX;
    bodyStyles.overflowY = this.bodyOverflowY;
    bodyStyles.paddingRight = this.bodyPaddingRight;
  }

  render() {
    const { mobialMenuOpen } = this.state;
    const { className } = this.props;

    return (
      <Headroom>
        <div className={classnames('header', className, { 'mobial-menu-open': mobialMenuOpen })}>
          <i
            className={classnames('icon', { 'icon-nav': !mobialMenuOpen, 'icon-close': mobialMenuOpen })}
            onClick={() => this.toggleMenuOpen(!mobialMenuOpen)}
          />
          <div className="layout-limit-with">
            {this.constructor.getNameLogo()}
            {this.getNavigation()}
          </div>
        </div>
      </Headroom>
    );
  }
}
