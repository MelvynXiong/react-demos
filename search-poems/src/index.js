import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import SearchApp from './containers/SearchApp';
import keywordReducer from './reducers/keyword';
import './index.css';

const store = createStore(keywordReducer);
ReactDOM.render(<Provider store={store}>
  <SearchApp />
</Provider>, document.getElementById('root'));


