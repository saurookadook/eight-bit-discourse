import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({ post }) => {

  return (
    <div className="postDiv bg-success bg-white">
      <Link to={`/posts/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <div>
        <p>Author: {post.author.username} || Game of discussion: {post.game}</p>
      </div>
    </div>
  )
}

export default PostListItem;
