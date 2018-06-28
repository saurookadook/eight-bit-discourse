import { combineReducers } from 'redux';
import posts from './books.js';
import comments from './comments.js';
export const rootReducer = combineReducers({
  posts: posts,
  comments: comments
})
