export default function postsReducer (state = {loading: false, loaded: false, all: []}, action) {
  switch (action.type) {
    case 'LOADING_POSTS':
      return Object.assign({}, state, { loading: true, loaded: false })
    case 'FETCH_POSTS':
      return { loading: false , loaded: true, all: action.posts }
    case 'SUBMIT_POST':
      debugger
      return Object.assign({}, state, { posts: [...state.all, action.post] })
    case 'FETCH_USER_POSTS':
      return action.posts
    default:
      return state;
  }
}
