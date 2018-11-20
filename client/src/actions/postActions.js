import fetch from 'cross-fetch';
// import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';
// TODO: refactor
import { API_URL } from '../constants/apiUrl';

// const setPosts = (posts) => ({
//   type: types.SET_POSTS,
//   payload: {
//     posts
//   }
// })

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: types.LOADING_POSTS });

    return fetch(`${API_URL}/posts`)
      .then(response => response.json())
      .then(posts => {dispatch({ 
        type: types.FETCH_POSTS, 
        posts: posts })
      });
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
      dispatch({ type: types.LOADING_POST });
      // dhis fucked up
      return fetch(`${API_URL}/posts/${post.postId}`)
        // headers
        // body
        .then(response => response.json())
        .then(post => {dispatch({ 
          type: types.FETCH_POST, 
          post: post })});
    }
  }
// }

export function submitPost(formContent) {

  return (dispatch) => {
    dispatch({ type: types.SUBMITTING_POST })
    return fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({post: formContent})
    })
      .then(response => response.json())
      .then(posts => dispatch({ 
        type: types.UPDATE_POSTS, 
        posts: posts }));
  }

}