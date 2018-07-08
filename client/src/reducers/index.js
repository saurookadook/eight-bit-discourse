import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
// import comments from './comments.js';
export const rootReducer = combineReducers({
  posts: postsReducer,
  post: postsReducer
})
