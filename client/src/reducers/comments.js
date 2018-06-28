export default function comments (state = [], action) {
  switch(action.type) {
    case 'FETCH_COMMENTS':
      return action.comments;
    case 'SUBMIT_COMMENT':
      return action.comment;
    case 'UPDATE_COMMENT':
      return action.comment
    case 'REMOVE_COMMENT':
      return action.comments.filter()
    default:
      return state;
  }
}
