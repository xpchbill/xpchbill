import React from 'react';
import Helmet from 'react-helmet';
// eslint-disable-next-line
import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime();

export default class Html extends React.Component {

  static propTypes = {
    body: React.PropTypes.string.isRequired
  }

  /* eslint-disable class-methods-use-this */
  getStyles() {
    if (process.env.NODE_ENV === 'production') {
      // eslint-disable-next-line
      const styles = require('!raw!./public/styles.css');
      return <style dangerouslySetInnerHTML={{ __html: styles }} />;
    }
    return null;
  }

  render() {
    const head = Helmet.rewind();

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {this.getStyles()}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    );
  }
}
