import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import './index.scss';

export default class Nav extends React.PureComponent {
  render() {
    const { className } = this.props;

    return (
      <div className={classnames('ui-comp-nav', className)} >
        <Link to="/"><i className="icon icon-home" /></Link>
        <span onClick={() => window.scrollTo(0, 0)}><i className="icon icon-up" /></span>
      </div>
    );
  }
}
