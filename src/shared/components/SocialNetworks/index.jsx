import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class SocialNetworks extends React.PureComponent {
  render() {
    const { className, styles } = this.props;

    return (
      <div className={classnames('social-networks', className)} style={{ fontSize: '24px', ...styles }}>
        <a href="http://github.com/xpchbill" target="_blank" rel="noopener noreferrer">
          <i className="icon icon-mark-github" />
        </a>
        <a href="https://plus.google.com/u/0/106317325152824081785" target="_blank" rel="noopener noreferrer">
          <span className="icon icon-google-with-circle" />
        </a>
        <a href="mailto:xpchbill8@gmail.com" rel="noopener noreferrer">
          <i className="icon icon-mail" />
        </a>
      </div>
    );
  }
}
