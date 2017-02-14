import React from 'react';
import Home from '../src/components/home';

export default class Index extends React.Component {
  render() {
    return <Home {...this.props} />;
  }
}
