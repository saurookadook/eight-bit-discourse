import React from 'react';

const PostDisplay = ({ post }) => {
  return (
    <div className="postDiv">
      <h2 className="title">{post.title}</h2>
      <p className="game">{post.game}</p>
      <p className="author">By: {post.author.username}</p>
      <p className="rating">Rating: {post.rating} stars</p>
      <p className="discussion">Summary: {post.discussion}</p>
    </div>
  )
}

export default PostDisplay;
