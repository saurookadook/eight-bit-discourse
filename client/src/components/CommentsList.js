import React from 'react';
import '../styles/scss/App.scss';

const CommentsList = ({ comments }) => {
    if (comments) {
      const formattedComments = comments.map((comment, index) => {
        return (
          <div className="commentDiv" key={index}>
            <p><strong>{comment.user.username}</strong>: {comment.content}</p>
          </div>
        )
      })

      return(
        <div>
          {formattedComments}
        </div>
      )
    } else {
      return null;
    }
  }

export default CommentsList;
