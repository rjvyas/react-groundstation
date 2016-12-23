import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import routes from './routes';
//import {loadTest} from './actions/testActions';
import configureStore from './store/configureStore';
//import initialState from './reducers/initialState';

import './index.css';

const store = configureStore();

// store.subscribe(() => {
// 	console.log("state changed: ", store.getState());
// })

// store.dispatch({"type":"TEST_ACTION","payload":"sup"});
// store.dispatch({"type":"TEST_ACTION2","payload":["hello","world"]});
// store.dispatch((dispatch) => {
// 	dispatch({"type":"GET_TEST_DATA"});
// 	return new Promise((resolve, reject) => {
//         resolve(() => {
//         	dispatch({"type":"RECEIVE_TEST_DATA", "payload": {"a":"some test data", "b":"another", "c":[1,2,3,4,5]} });
//         })
//     });
// })

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);