import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class SliderNav extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0
    };
  }

  componentDidMount() {
    this.handleScrollWrapper = () => this.handleScroll();
    window.addEventListener('scroll', this.handleScrollWrapper);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollWrapper);
  }

  handleScroll() {
    this.setState({
      scrollTop: window.scrollY
    });
  }

  render() {
    const { className } = this.props;
    const { scrollTop } = this.state;

    return (
      <div className={classnames('ui-comp-nav', className)} >
        <span
          className="ms-u-slideDownIn20"
          onClick={() => window.scrollTo(0, 0)} style={{
            display: scrollTop > 100 ? 'block' : 'none'
          }}
        ><i className="icon icon-up" /></span>
      </div>
    );
  }
}
