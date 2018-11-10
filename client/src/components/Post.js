import React from 'react';
import '../styles/css/App.css'

const Post = ({ post }) => {
  // debugger
  // TODO: refactor post.post to just be post
  return (
    <div className="container CloudBubble py-4 my-4">
      <div className="row">
        <div className="postDiv col-5">
          <h2 className="title">{post.post.title}</h2>
          <p className="game"><b>Game:</b> {post.post.game}</p>
          <p className="author"><b>By:</b> {post.post.author.username}</p>
          <p className="rating"><b>Rating:</b> {post.post.rating} stars</p>
        </div>

        <div className="col-6">
          <p className="discussion"><b>Summary:</b> {post.post.discussion}</p>
        </div>
      </div>
    </div>
  )
}

export default Post;
