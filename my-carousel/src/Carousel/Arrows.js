import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { arrowLeft, arrowRight} from "./style";

class Arrows extends Component {
  static propTypes = {
    move: PropTypes.func
  };
  handleClick(step) {
    this.props.move(step);
  }
  render() {
    return (
      <div>
        <div className={arrowLeft}
          onClick={this.handleClick.bind(this, -1)}>
          左箭头
        </div>
        <div className={arrowRight}
          onClick={this.handleClick.bind(this, 1)}>
          右箭头
        </div>
      </div>
    );
  }
}
export default Arrows;