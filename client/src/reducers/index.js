import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
// import comments from './comments.js';
export const rootReducer = combineReducers({
  // add `loading` and `loaded` keys here?
  posts: postsReducer,
  post: postsReducer
})
