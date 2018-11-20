import * as types from '../actions/actionTypes';
import initialState from './initialState';

// refactor
export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOADING_POSTS:
      // debugger
      return {
        ...state,
        loading: true,
      }
    case types.FETCH_POSTS:
      // debugger
      return {
        ...state,
        loading: false,
        loaded: true,
        // TODO: refactor to `posts: [...action.posts]`?
        all: action.posts
      }
    // case 'SUBMITTING_POST':
    //   return Object.assign({}, state, { loading: true, loaded: false })
    case types.UPDATE_POSTS:
      // debugger
      return Object.assign({}, state, { all: action.posts })
    // case 'FETCH_USER_POSTS':
    //   return action.posts
    default:
      return state;
  }
}