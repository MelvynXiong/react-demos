import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchContent from "./SearchContent";

class SearchContentList extends Component {
  static propTypes = {
    poems: PropTypes.array
  };
  static defaultProps = {
    poems: []
  };
  render() {
    return (
      <ul className="suggestions">
        {this.props.poems.map((poem, index) => <SearchContent poem={poem} key={index}/>)}
      </ul>);
  }
}
export default SearchContentList;