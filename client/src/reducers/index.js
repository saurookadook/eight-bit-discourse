import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postsReducer from './postsReducer';
import postReducer from './postReducer'; 
// import comments from './comments.js';

// TODO: refactor?
// import user from './userReducer';
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
  currentUser: userReducer,
  posts: postsReducer,
  post: postReducer
})
