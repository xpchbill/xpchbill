import React from 'react';
import classnames from 'classnames';
import Facebook from 'react-icons/lib/fa/facebook-square';
import Github from 'react-icons/lib/fa/github';
import GooglePlus from 'react-icons/lib/fa/google-plus-square';
import GMail from 'react-icons/lib/fa/envelope';

import './index.scss';

const networks = [
  {
    title: 'Facebook address',
    url: 'http://github.com/xpchbill',
    icon: Facebook
  },
  {
    title: 'Github address',
    url: 'http://github.com/xpchbill',
    icon: Github
  },
  {
    title: 'G+ address',
    url: 'https://plus.google.com/u/0/106317325152824081785',
    icon: GooglePlus
  },
  {
    title: 'gmail address',
    url: '',
    icon: GMail
  }
];

export default class SocialNetworks extends React.PureComponent {
  render() {
    const { className, styles } = this.props;

    return (
      <div className={classnames('social-networks', className)} >
        {
          networks.map(network => (
            <a
              key={network.title}
              href={network.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Bill's ${network.title}`}
              className="social-networks__icon"
              style={{ fontSize: '24px', ...styles }}
            >
              <network.icon />
            </a>
          ))
        }
      </div>
    );
  }
}
