export default function comments (state = [], action) {
  switch(action.type) {
    case 'FETCH_COMMENTS':
      // might not need this
      return action.comments;
    case 'SUBMIT_COMMENT':
      // push comment into post.comments collection
      return [...state, action.comment];
    case 'UPDATE_COMMENT':
      return action.comment
    case 'REMOVE_COMMENT':
      // remove comment by filtering post.comments collection
      return state.filter(comment => comment.id !== action.commentId)
    default:
      return state;
  }
}
