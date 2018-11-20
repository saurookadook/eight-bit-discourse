import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store.js';

// -- Styles --
// import "../semantic/dist/semantic.min.css";
import "./styles/css/index.css";
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

if (localStorage.getItem('token') === null) {
  localStorage.setItem('token', false);
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") // eslint-disable-line no-undef
);
registerServiceWorker();
