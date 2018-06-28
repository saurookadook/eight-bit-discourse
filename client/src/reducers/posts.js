export default function posts (state = [], action) {
  switch (action.type) {
    case 'FETCH_POSTS':
    case 'FETCH_POST':
    case 'SUBMIT_POST':
    case 'UPDATE_POST':
    default:
      return state;
  }
}
