export function fetchPosts() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POSTS' });
    return fetch('http://localhost3001/posts')
      .then(response => response.json())
      .then(post => dispatch({ type: 'FETCH_POSTS', posts: posts }));
  }
}

export function submitBook(formContent) {
  return (dispatch) => {
    //dispatch({ type: 'SUBMITTING_BOOK' });
    return fetch(`http://localhost:3001/posts`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({post: formContent})})
      .then(resp => resp.json())
      .then(post => dispatch({ type: 'SUBMIT_BOOK', post: post}))
  }
}
