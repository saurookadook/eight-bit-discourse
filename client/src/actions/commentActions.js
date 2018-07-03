// export function fetchComments(postId) {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_COMMENTS' });
//     return fetch(`http://localhost:3001/posts/${postId}/comments`)
//       .then(response => response.json())
//       .then(comments => dispatch({ type: 'FETCH_COMMENTS', comments: comments }));
//   }
// }

export function submitComment(formContent) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/posts`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({content: formContent})})
      .then(response => response.json())
      .then(comment => dispatch({ type: 'SUBMIT_COMMENT', comment: comment }));
  }
}
