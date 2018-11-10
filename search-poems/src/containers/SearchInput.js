import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeKeyword, initOriginData, changeData} from "../reducers/keyword";
import SearchInput from '../components/SearchInput';

class SearchInputContainer extends Component {
  static propTypes = {
    changeData: PropTypes.func,
    changeKeyword: PropTypes.func,
    initOriginData: PropTypes.func,
    originData: PropTypes.array,
  };
  componentWillMount() {
    const url = "https://gist.githubusercontent.com/liyuechun/f00bb31fb8f46ee0a283a4d182f691b4/raw/3ea4b427917048cdc596b38b67b5ed664605b76d/TangPoetry.json";
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.props.initOriginData(result);
      });
  }
  _findMatches (wordToMatch, poetrys) {
    return poetrys.filter(poet => {
      const regex = new RegExp(wordToMatch, 'gi');
      const author = poet.detail_author.join('');
      return poet.detail_text.match(regex) || author.match(regex) || poet.title.match(regex);
    });
  }
  handleSearchInputChange(keyword) {
    if(this.props.changeKeyword) {
      this.props.changeKeyword(keyword);
    }
    const filterData = this._findMatches(keyword, this.props.originData);
    const data = keyword ? filterData.map(item =>{
      return {
        text: item.detail_text.replace(keyword, `<span class="hl">${keyword}</span>`),
        title: item.title.replace(keyword, `<span class="hl">${keyword}</span>`),
        author: item.detail_author[0].replace(keyword, `<span class="hl">${keyword}</span>`)
      }
    }) : [];
    if(this.props.changeData) {
      this.props.changeData(data);
    }
  }
  render() {
    return (<SearchInput onSearchInputChange={this.handleSearchInputChange.bind(this)} />);
  }
}
const mapStateToProps = (state) => {
  return {
    ...state
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    initOriginData: (originData) => {
      dispatch(initOriginData(originData));
    },
    changeKeyword: (keyword) => {
      dispatch(changeKeyword(keyword));
    },
    changeData: (data)=>{dispatch(changeData(data))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInputContainer);