import * as types from '../actions/actionTypes';
import initialState from './initialState';

// commentsReducer?
export default function comments (state = [], action) {
  switch(action.type) {
    case types.FETCH_COMMENTS:
      // might not need this
      return action.comments;
    case types.SUBMIT_COMMENT:
      // push comment into post.comments collection
      // debugger
      return Object.assign({}, state, { loading: false, loaded: true }, action.post);
    case types.UPDATE_COMMENT:
      return action.comment
    case types.REMOVE_COMMENT:
      // remove comment by filtering post.comments collection
      return state.filter(comment => comment.id !== action.commentId)
    default:
      return state;
  }
}
