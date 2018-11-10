import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dot from './Dot';
import { dotsWrapper } from './style';

class DotsList extends Component {
  static propTypes = {
    count: PropTypes.number,
    selectedItem: PropTypes.number,
    move: PropTypes.func
  };
  handleClick(index) {
    const step = index - this.props.selectedItem;
    this.props.move(step);
  }
  render() {
    const dotsList = [];
    const { count, selectedItem } = this.props;
    for(let i=0; i<count; i++) {
      dotsList[i] = <Dot key={i} index={i} selectedItem={selectedItem} onClick={this.handleClick.bind(this)}/>
    }
    return (
      <div className={dotsWrapper}>
        {dotsList}
      </div>
    );
  }
}

export default DotsList;