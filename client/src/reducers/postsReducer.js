import * as types from '../actions/actionTypes';

export default function postsReducer (state = {loading: false, loaded: false, all: []}, action) {
  switch (action.type) {
    case types.LOADING_POSTS:
      return Object.assign({}, state, { loading: true, loaded: false })
    case types.FETCH_POSTS:
      debugger
      return { loading: false , loaded: true, all: action.posts }
    // case 'SUBMITTING_POST':
    //   return Object.assign({}, state, { loading: true, loaded: false })
    case types.UPDATE_POSTS:
      // debugger
      return Object.assign({}, state, { all: action.posts })
    case 'FETCH_USER_POSTS':
      return action.posts
    default:
      return state;
  }
}
