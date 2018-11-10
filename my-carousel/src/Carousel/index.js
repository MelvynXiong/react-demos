import React, { Component } from 'react';
import Slider from './Slider';
import DotsList from './DotsList';
import Arrows from './Arrows';
import { viewBox } from "./style";

class Carousel extends Component {
  static defaultProps = {
    speed: 1,
    delay: 2,
    pause: true,
    autoPlay: true,
    dots: true,
    arrows: true,
    items: [],
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 0
    }
  }
  componentWillMount() {
      this.goPlay();
  }
  // 自动轮播
  goPlay() {
    if(this.props.autoPlay) {
      this.autoTag = setInterval(() => {
        this.move(1);
      }, this.props.delay * 1000);
    }
  }
  // 暂停自动轮播
  pausePlay() {
    clearInterval(this.autoTag);
  }
  /**
   * 移动轮播项, 改变当前项状态
   * @method move
   * @param {number} step 表示移动轮播项的数量 -和+分别代表向前和向后
   */
  move(step) {
    const len = this.props.items.length;
    // pos 表示移动后的位置
    let pos = this.state.selectedItem + step;
    if (pos < 0) {
      pos += len;
    }
    if (pos >= len) {
      pos -= len;
    }
    this.setState({
      selectedItem: pos
    });
  }
  render() {
    return (
      <div className={viewBox}
           onMouseOver={this.props.pause?this.pausePlay.bind(this):null}
           onMouseOut={this.props.pause?this.goPlay.bind(this):null}>
        <Slider speed={this.props.speed}
                selectedItem={this.state.selectedItem}
                items={this.props.items}
                />
        {this.props.arrows ? <Arrows
          move={this.move.bind(this)} /> : null}
        {this.props.dots ? <DotsList
          count={this.props.items.length}
          selectedItem={this.state.selectedItem}
          move={this.move.bind(this)}
          /> : null}
      </div>
    );
  }
}

export default Carousel;