import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SliderItem extends Component {
  static propTypes = {
    // 轮播项总数
    count: PropTypes.number,
    // 轮播项信息
    item: PropTypes.object
  };
  render() {
    const { count, item } = this.props;
    const width = 100/count + '%';
    return (
      <li style={{width: width}}>
        <img src={item.src} alt={item.alt} />
      </li>
    );
  }
}
export default SliderItem;