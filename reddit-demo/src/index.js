import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { selectSubreddit, fetchPostIfNeeded } from './actions'; 
import rootReducer from './reducers/index';
import App from './App';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
)

store.dispatch(selectSubreddit('reactjs'));
store.dispatch(fetchPostIfNeeded('reactjs')).then(()=>console.log(store.getState()));

ReactDOM.render(<App />, document.getElementById('root'));
