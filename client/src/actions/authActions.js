import fetch from 'isomorphic-fetch';
import { API_URL } from '../constants/apiUrl';
import * as types from './actionTypes.js';

const authRequest = () => {
  return {
    type: types.AUTHENTICATION_REQUEST
  }
}

const authSuccess = (user, token) => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    user: user,
    token: token
  }
}

const authFailure = (errors) => {
  return {
    type: types.AUTHENTICATION_FAILURE,
    errors: errors
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    return dispatch({
      type: types.LOGOUT
    });
  }
}

export const signup = (user) => {
  // debugger;
  return dispatch => {
    return fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({user: user}),
      // credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(jresp => {
        dispatch(authenticate({
          name: user.username,
          email: user.email,
          password: user.password})
        );
      })
      .catch((errors) => {
        dispatch(authFailure(errors))
      })
  };
}

export const authenticate = (authCredentials) => {
  // debugger
  return dispatch => {
    dispatch(authRequest())
    return fetch(`${API_URL}/user_token`, {
      method: 'POST',
      mode: 'no-cors',
      credentials: 'omit',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({auth: authCredentials}),
      // credentials: 'same-origin'
    })
    // const request = new Request(`${API_URL}/user_token`, {
    //   method: "POST",
    //   headers: new Headers({
    //     "Accept": "application/json",
    //     "Content-Type": "application/json",
    //   }),
    //   body: JSON.stringify({user: userCredentials}),
    //   // credentials: 'same-origin'
    // })

      .then(res => {
        // debugger
        res.json()})
      .then(response => {
          // debugger
          const token = response.jwt;          
          localStorage.setItem('token', token);
          return getUser(authCredentials)
      })
      .then((user) => {
          dispatch(authSuccess(user, localStorage.token))
      })
      .catch((errors) => {
          dispatch(authFailure(errors))
          localStorage.clear()
      })
  }
}

export const getUser = (userCredentials) => {
  const request = new Request(`${API_URL}/find_user`, {
    method: "POST",
    headers: new Headers({
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`,
    }),
    body: JSON.stringify({user: userCredentials}),
    // credentials: 'same-origin'
  })
  // debugger
  // return fetch(`${API_URL}/find_user`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Authorization": `Bearer ${localStorage.token}`
  //   },
  //   body: JSON.stringify({
  //     user: userCredentials
  //   }),
  //   credentials: 'same-origin'
  // })
  return fetch(request)
    .then(response => response.json())
    .then(userJson => {return userJson})
    .catch(error => {
      return error;
    });
}
