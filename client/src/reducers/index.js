import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import postReducer from './postReducer'; 
// import comments from './comments.js';
export const rootReducer = combineReducers({
  // add `loading` and `loaded` keys here?
  posts: postsReducer,
  post: postReducer
})
