// import fetch from 'isomorphic-fetch'

export function fetchPosts() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POSTS' });
    return fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(posts => dispatch({ type: 'FETCH_POSTS', posts: posts }));
  }
}

export function fetchPost(bookId) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POST' });
    return fetch(`http://localhost:3001/posts/${bookId}`)
      .then(response => response.json())
      .then(post => dispatch({ type: 'FETCH_POST', post: post }));
  }
}

export function submitPost(formContent) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/posts`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({post: formContent})})
      .then(response => response.json())
      .then(post => dispatch({ type: 'SUBMIT_POST', post: post }));
  }
}
