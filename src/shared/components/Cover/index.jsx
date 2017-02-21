import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class Cover extends React.PureComponent {
  render() {
    const { className, src, children } = this.props;

    return (
      <div className={classnames('ui-comp-cover', className)} >
        <div className="ui-comp-cover-before" style={src ? { backgroundImage: `url(${src})` } : {}} />
        <div className="ui-comp-cover-content">{children}</div>
        <div className="ui-comp-cover-after" />
      </div>
    );
  }
}
