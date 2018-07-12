export default function postsReducer (state = {loading: false, loaded: false, all: []}, action) {
  switch (action.type) {
    case 'LOADING_POSTS':
      // debugger
      return Object.assign({}, state, { loading: true, loaded: false })
    case 'FETCH_POSTS':
      return { loading: false , loaded: true, all: action.posts }
    case 'SUBMIT_POST':
      debugger
      return Object.assign({}, state, { posts: [...state.posts, action.post] })
    case 'FETCH_USER_POSTS':
      return action.posts
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
