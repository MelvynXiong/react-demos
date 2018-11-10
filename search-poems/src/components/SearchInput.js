import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  static propTypes = {
    onSearchInputChange: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }
  //当失去焦点和值发生变化时调用
  handleSearchInputChange(e) {
    this.setState({
      content: e.target.value
    });
    if(this.props.onSearchInputChange) {
      this.props.onSearchInputChange(e.target.value);
    }
  }
  render() {
    return (<input className="search" placeholder="诗人名字，关键字" value={this.state.content}
        onChange={this.handleSearchInputChange.bind(this)}
        onBlur={this.handleSearchInputChange.bind(this)}/>);
  }
}
export default SearchInput;
