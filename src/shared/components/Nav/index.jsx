import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import HomeIcon from 'react-icons/lib/ti/home-outline';
import GoToUpIcon from 'react-icons/lib/fa/angle-up';

import './index.scss';

const navIcons = [
  {
    title: 'Home',
    url: '/',
    icon: HomeIcon
  }
];

export default class Nav extends React.PureComponent {
  render() {
    const { className } = this.props;

    return (
      <div className={classnames('ui-comp-nav', className)} >
        {
          navIcons.map(nav => (
            <Link
              key={nav.title}
              href={nav.url}
              title={nav.title}
              rel="noopener noreferrer"
            >
              <nav.icon />
            </Link>
          ))
        }
        <span onClick={() => window.scrollTo(0, 0)}><GoToUpIcon /></span>
      </div>
    );
  }
}
