import React from 'react';

const PostDisplay = ({ props }) => {
  return (
    <div className="mainPostDiv">
      <Post post={props.post} />
      <div className="comments">
        <CommentsList comments={props.post.comments} />
        <CommentForm postId={props.match.params.id} />
      </div>
    </div>
  )
}
