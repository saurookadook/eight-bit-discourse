export default function posts (state = [], action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.posts
    case 'FETCH_POST':
      return action.post
    case 'FETCH_USER_POSTS':
      return action.posts
    case 'FETCH_USER_POST':
      return action.post
    case 'SUBMIT_POST':
      return [...state, action.post]
    case 'UPDATE_POST':
    default:
      return state;
  }
}
