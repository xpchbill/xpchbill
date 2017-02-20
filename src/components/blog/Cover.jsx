import React from 'react';

export default class Cover extends React.PureComponent {
  render() {
    const { className, src } = this.props;

    return (
      <div className={className} style={{ background: `url(${src})` }} />
    );
  }
}
