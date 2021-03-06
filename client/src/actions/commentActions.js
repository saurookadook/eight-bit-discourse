import fetch from 'cross-fetch';
// import fetch from 'isomorphic-fetch';

// export function fetchComments(postId) {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_COMMENTS' });
//     return fetch(`http://localhost:3001/posts/${postId}/comments`)
//       .then(response => response.json())
//       .then(comments => dispatch({ type: 'FETCH_COMMENTS', comments: comments }));
//   }
// }

export function submitComment(formContent) {
  // need `postId` and
  // debugger
  return (dispatch) => {
    return fetch(`http://localhost:3001/posts/${formContent.postId}/comments`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({comment: formContent})})
      .then(response => response.json())
      .then(post => {dispatch({ type: 'UPDATE_POST', post })});
  }
}
