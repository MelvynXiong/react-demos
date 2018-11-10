//初始代码，逻辑基本都在这，复用性太低
import React, {Component} from 'react';
import SearchInput from './SearchInput';
import SearchContentList from './SearchContentList';

class SearchApp extends Component {
  constructor() {
    super();
    this.state = {
      originData: [],
      data: [],
      keyword: ''
    }
  }
  componentWillMount() {
    const url = "https://gist.githubusercontent.com/liyuechun/f00bb31fb8f46ee0a283a4d182f691b4/raw/3ea4b427917048cdc596b38b67b5ed664605b76d/TangPoetry.json";
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          originData: result,
          data: result
        })
      });
  }
  handleContentChange(content) {
    this.setState({
      keyword: content,
      data: this._findMatches(content, this.state.originData)
    });
  }
  _findMatches(wordToMatch, poetrys) {
    return poetrys.filter(poet => {
      const regex = new RegExp(wordToMatch, 'gi');
      const author = poet.detail_author.join('');
      return poet.detail_text.match(regex) || author.match(regex) || poet.title.match(regex);
    });
  }
  render() {
    return (
      <form className="search-form">
        <SearchInput onSearchInputChange={this.handleContentChange.bind(this)} />
        <SearchContentList poems={this.state.data}/>
      </form>);
  }
}
export default SearchApp;