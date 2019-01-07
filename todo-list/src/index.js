import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={App} />
        </Router>
    </Provider>
);
const store = createStore(rootReducer);

// const next = store.dispatch;
// store.dispatch = function dispatchAndLog(action) {
//     console.log('dispatching', action);
//     let result = next(action);
//     console.log('next state', store.getState());
//     return result;
// }
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
=======
import App from './App';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
>>>>>>> ad13aee95a9edd7bae0d335462f13474156c2882
