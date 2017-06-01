import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { loginSuccess, logoutSuccess } from './actions';
import reducer from './reducers';
import App from './components/App';

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

function start() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

axios.get('/api/isAdmin')
  .then((request) => {
    let isAdmin = request.data;
    store.dispatch(loginSuccess());
    start();
  })
  .catch((error) => {
    store.dispatch(logoutSuccess());
    start();
  });
