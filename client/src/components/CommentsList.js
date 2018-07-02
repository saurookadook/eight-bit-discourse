import React from 'react';
import '../components/NavBar.css';
import '../styles/scss/App.scss';

const CommentsList = ({ comments }) => {
    if (comments) {
      const formattedComments = comments.map((comment, index) => {
        // debugger
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
