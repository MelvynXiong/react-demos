import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SearchContentList from '../components/SearchContentList';


class SearchContentListContainer extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };
  render() {
    return (<SearchContentList poems={this.props.data}/>);
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(SearchContentListContainer);