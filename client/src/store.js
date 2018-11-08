import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';

// TODO: for React update?
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

// const store = createStore(
//   rootReducer, composeEnhancer(applyMiddleware(thunk))
// );

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
