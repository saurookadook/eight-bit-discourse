import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function postReducer (state = initialState, action) {
  switch (action.type) {
    case types.LOADING_POST:
      // return Object.assign({}, state, { loading: true, loaded: false })
      return {
        ...state,
        loading: true
      }
    case types.FETCH_POST:
      // return Object.assign({}, state, { loading: false, loaded: true }, action.post)
      return {
        ...state,
        loading: false,
        loaded: true,
        post: action.post
      }
      // return { loading: false, loaded: true,  action.post }
    // case 'FETCH_USER_POST':
    //   return action.post
    // case 'SUBMIT_POST':
    //   debugger
    //   return [...state, action.post]
    case types.UPDATE_POST:
      // debugger
      return Object.assign({}, state, { loading: false, loaded: true }, action.post);
    default:
      return state;
  }
}
