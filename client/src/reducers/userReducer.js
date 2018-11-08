import * as types from '../actions/actionTypes';
import initialState from './initialState';

// refactor
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOADING_USER:
      // debugger
      return {
        ...state,
        loading: true,
      }
    case types.FETCH_USER:
      // debugger
      return {
        ...state,
        loading: false,
        loaded: true,
        currentUser: action.user
      }
    default:
      return state;
  }
}