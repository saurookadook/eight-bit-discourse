import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import  './post.css';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class Post extends Component {

  render() {
    const { post } = this.props

    return (
      <div className="postDiv">
        <Link to={`/posts/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <div>
          <p>Author: {post.author.username} || Game of discussion: {post.game}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const post = state.posts.find((post) => post.id === parseInt(ownProps.post.id))
  if (post) {
    return { post: post }
  } else {
    return { post: [] }
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     onLike: onLike
//   }, dispatch)
// }

export default connect(mapStateToProps)(Post);
