import React from 'react';
import classnames from 'classnames';
import Github from 'react-icons/lib/fa/github';
import GooglePlus from 'react-icons/lib/fa/google-plus-square';
import GMail from 'react-icons/lib/fa/envelope';
import Wechat from 'react-icons/lib/fa/wechat';

import './index.scss';

const networks = [
  {
    title: 'Github',
    url: 'http://github.com/xpchbill',
    icon: Github
  },
  {
    title: 'G+',
    url: 'https://plus.google.com/u/0/106317325152824081785',
    icon: GooglePlus
  },
  {
    title: 'Gmail',
    url: '',
    icon: GMail
  },
  {
    title: 'Wechat: xxxx',
    icon: Wechat
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
