import React from 'react';
import '../styles/css/App.css'

const Post = ({ post }) => {
  return (
    <div className="container CloudBubble py-4 my-4">
      <div className="row">
        <div className="postDiv col-5">
          <h2 className="title">{post.title}</h2>
          <p className="game"><b>Game:</b> {post.game}</p>
          <p className="author"><b>By:</b> {post.author.username}</p>
          <p className="rating"><b>Rating:</b> {post.rating} stars</p>
        </div>

        <div className="col-6">
          <p className="discussion"><b>Summary:</b> {post.discussion}</p>
        </div>
      </div>
    </div>
  )
}

export default Post;
