import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// import "../semantic/dist/semantic.min.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") // eslint-disable-line no-undef
);
registerServiceWorker();
