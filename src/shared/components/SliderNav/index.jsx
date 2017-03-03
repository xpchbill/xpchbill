import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class SliderNav extends React.PureComponent {
  render() {
    const { className } = this.props;

    return (
      <div className={classnames('ui-comp-nav', className)} >
        <span onClick={() => window.scrollTo(0, 0)}><i className="icon icon-up" /></span>
      </div>
    );
  }
}
