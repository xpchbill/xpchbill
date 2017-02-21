import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class Cover extends React.PureComponent {
  render() {
    const { className, src, children } = this.props;

    return (
      <div className={classnames('ui-comp-cover', className)} style={src ? { background: `url(${src})` } : {}} >
        {children}
      </div>
    );
  }
}
