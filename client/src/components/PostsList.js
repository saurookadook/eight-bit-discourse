import React from 'react';
import '../components/NavBar.css';
import Post from './Post'

const PostsList = ({ postsList }) => {
  debugger
  if (postsList) {
    const posts = postsList.map((post, index) => {
      return (
        <Post key={index} post={post} />
      )
    })

    return (
      <div className="postsList">
        <div>{posts}</div>
      </div>
    )
  } else {
    return null;
  }
}

export default PostsList;
