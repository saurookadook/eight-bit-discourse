import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import  './post.css';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class Post extends Component {

  render() {
    const {post} = this.props
    debugger
    return (
      <div className="postDiv">
        <h3>{post.title} || </h3>
        <p>Game: {post.game}</p>
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
