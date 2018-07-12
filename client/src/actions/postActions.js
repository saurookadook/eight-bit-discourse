import fetch from 'cross-fetch';
// import fetch from 'isomorphic-fetch';

export function fetchPosts() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POSTS' });
    return fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(posts => {dispatch({ type: 'FETCH_POSTS', posts: posts })});
  }
}

export function fetchPost(post) {
  // if (userId != null || undefined) {
  //   return (dispatch) => {
  //     dispatch({ type: 'LOADING_USER_POST' });
  //     return fetch(`http://localhost:3001/users/${userId}/posts/${postId}`)
  //       .then(response => reponse.json())
  //       .then(post => dispatch({ type: 'FETCH_USER_POST', post: post }));
  //   }
  // } else {
    return (dispatch) => {
      dispatch({ type: 'LOADING_POST' });
      // dhis fucked up
      return fetch(`http://localhost:3001/posts/${post.postId}`)
        // headers
        // body
        .then(response => response.json())
        .then(post => {dispatch({ type: 'FETCH_POST', post: post })});
    }
  }
// }

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
