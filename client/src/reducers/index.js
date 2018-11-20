import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postsReducer from './postsReducer';
import postReducer from './postReducer'; 
// import comments from './comments.js';

// TODO: refactor?
// import posts from './postsReducer';
// import post from './postReducer'; 
// import comments from './comments.js';

// export default combineReducers({
//   user,
//   posts,
//   post,
//   comments
// })

export const rootReducer = combineReducers({
  // add `loading` and `loaded` keys here?
  auth: authReducer,
  posts: postsReducer,
  post: postReducer
})
