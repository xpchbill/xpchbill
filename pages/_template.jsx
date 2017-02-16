import React from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import { prefixLink } from 'gatsby-helpers';
import Headroom from 'react-headroom';
import { config } from 'config';
/* eslint-enable */
import FontFaceObserver from 'fontfaceobserver';
import { parsePostedPages } from 'redux/actions';

export class EntryPointTemplate extends React.Component {

  static propTypes = {
    children: React.PropTypes.shape().isRequired
  }

  componentDidMount() {
    const { route: { pages } } = this.props;
    if (pages) {
      this.props.parsePostedPages(pages);
    }
    new FontFaceObserver('Roboto').load().then(() => {
      document.documentElement.classList.add('Roboto--loaded');
      // eslint-disable-next-line
      console.log('Load Font Roboto successful.');
    }, () => {
      // eslint-disable-next-line
      console.log('Load Font Roboto failed.');
    });
  }

  render() {
    return (
      <div className="layout">
        {this.props.children}
      </div>
    );
  }

}

export default connect(
  null, {
    parsePostedPages
  }
)(EntryPointTemplate);
