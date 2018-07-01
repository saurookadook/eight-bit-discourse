import React from 'react';
import '../components/NavBar.css';
import '../styles/scss/App.scss';

const CommentsList = ({ comments }) => {
    if (comments) {
      let reverseComments = comments.reverse()
      const comments = reverseComments.map((comment, index) => {
        return (
          <div className="commentDiv" key={index}>
            <p><strong>{comment.user}</strong>: {comment.content}</p>
          </div>
        )
      })

      return(
        <div>
          {comments}
        </div>
      )
    } else {
      return null;
    }
  }

export default CommentsList;
