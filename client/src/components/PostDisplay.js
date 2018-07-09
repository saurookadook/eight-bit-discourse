import React, { Component } from 'react';
import Post from './Post';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';
import '../styles/css/App.css'

const PostDisplay = ({ props }) => {
  return (
    <div className="PostDislay">
      <Post post={props.post} />
      <div className="comments">
        <CommentsList comments={props.post.comments} />
        <CommentForm postId={props.match.params.id} />
      </div>
    </div>
  )
}

export default PostDisplay;
