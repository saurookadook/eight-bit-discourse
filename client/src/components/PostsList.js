import React from 'react';
import PostListItem from './Post'

const PostsList = ({ postsList }) => {

  if (postsList) {
    const posts = postsList.map((post, index) => {
      return (
        <PostListItem key={index} post={post} />
      )
    })

    return (
      <div className="postsList text-left ml-3">
        <div>{posts}</div>
      </div>
    )
  } else {
    return null;
  }
}

export default PostsList;
