export default function postsReducer (state = {loading: false, posts: [], post: {}}, action) {
  switch (action.type) {
    case 'LOADING_POSTS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_POSTS':
      return Object.assign({}, state, {loading: false}, posts: action.posts)
    case 'FETCH_POST':
      return Object.assign({}, state, {loading: false}, post: action.post)
    case 'FETCH_USER_POSTS':
      return action.posts
    case 'FETCH_USER_POST':
      return action.post
    case 'SUBMIT_POST':
      return [...state, action.post]
    case 'UPDATE_POST':
    default:
      return state;
  }
}


// export default function postsReducer (state = [], action) {
//   switch (action.type) {
//     case 'FETCH_POSTS':
//       return action.posts
//     case 'FETCH_POST':
//       return action.post
//     case 'FETCH_USER_POSTS':
//       return action.posts
//     case 'FETCH_USER_POST':
//       return action.post
//     case 'SUBMIT_POST':
//       return [...state, action.post]
//     case 'UPDATE_POST':
//     default:
//       return state;
//   }
// }
