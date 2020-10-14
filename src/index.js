import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

import { Provider } from 'react-redux';
import store from './js/store/index';
import App from './js/components/App';

import index from "./js/index";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);