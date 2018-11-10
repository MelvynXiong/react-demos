import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dot extends Component {
  static propTypes = {
    // 当前项
    index: PropTypes.number,
    // 当前选中项
    selectedItem: PropTypes.number,
    onClick: PropTypes.func
  };

  handleClick(index) {
    if(this.props.onClick) {
      this.props.onClick(index);
    }
  }
  render() {
    const { index, selectedItem } = this.props;
    return (<span
      onClick={this.handleClick.bind(this, index)}
      className={(index===selectedItem) ? 'selected-dot' : null} />);
  }
}
export default Dot;