import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class FaviconMe extends React.PureComponent {
  render() {
    const { className, children, styles } = this.props;

    return (
      <div className={classnames('ui-comp-faviconme', className)} style={styles} >
        {children}
      </div>
    );
  }
}
