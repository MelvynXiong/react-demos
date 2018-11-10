import React, { Component } from 'react';
import SearchInput from './SearchInput';
import SearchContentList from './SearchContentList';

export default class extends Component {
  render() {
    return (
      <form className="search-form">
        <SearchInput />
        <SearchContentList />
      </form>);
  }
}