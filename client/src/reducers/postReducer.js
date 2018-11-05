import * as types from '../actions/actionTypes';

export default function postReducer (state = { loading: false, loaded: false }, action) {
  switch (action.type) {
    case types.LOADING_POST:
      return Object.assign({}, state, { loading: true, loaded: false })
    case types.FETCH_POST:
      return Object.assign({}, state, { loading: false, loaded: true }, action.post)
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
