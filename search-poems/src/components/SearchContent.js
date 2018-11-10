import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchContent extends Component {
  static propTypes = {
    poem: PropTypes.object.isRequired
  };

  render() {
    const {poem} = this.props;
    return (
      <li>
        <span className="poet" dangerouslySetInnerHTML={{__html: poem.text}} />
        <span className="title" dangerouslySetInnerHTML={{__html: poem.title+' - '+poem.author}} />
      </li>);
  }
}
export default SearchContent;