import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SliderItem from './SliderItem';
import { slider } from "./style";

class Slider extends Component {
  static propTypes = {
    speed: PropTypes.number,
    items: PropTypes.array.isRequired,
    selectedItem: PropTypes.number
  };
  render() {
    const { items, speed, selectedItem } = this.props;
    const style = {
      width: items.length*100 + '%',
      transitionDuration: speed + 's',
      left: -100*selectedItem + '%'
    };
    return (
      <ul className={slider} style={style}>
        {items.map((item, index) => <SliderItem key={index} count={items.length} item={item}/>)}
      </ul>
    );
  }
}
export default Slider;