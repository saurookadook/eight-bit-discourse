import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/css/App.css';
import PostDisplay from '../components/PostDisplay';
import { LoadingPage } from '../components/LoadingPage';
// import Post from '../components/Post';
// import CommentForm from './CommentForm';
// import CommentsList from '../components/CommentsList';
import { fetchPost } from '../actions/postActions';
// import { fetchComments } from '../actions/commentActions';

class PostPage extends Component {
  componentDidMount() {
    debugger
    this.props.fetchPost(this.props.post)
  }

  render() {
    // use conditional to return loading page if `this.props.post` is empty/doesn't exist
    // hasData if (this.props.post exists?) { true } else { false } end
    // hasData ? <PostDisplay info={this.props} /> : <LoadingPage />

    return (
      <div className="PostPage">
        {(this.props.post.loaded && !this.props.post.loading) ? (
          <PostDisplay props={this.props} />
        ) : (
          <LoadingPage />
        )}
      </div>

      // <div className="mainPostDiv">
      //   <Post post={this.props.post} />
      //   <div className="comments">
      //     <CommentsList comments={this.props.post} />
      //     <CommentForm postId={this.props.match.params.id} />
      //   </div>
      // </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  debugger
  const postId = parseInt(ownProps.match.params.id)
  debugger
  if (typeof state.post.all !== "undefined") { // somehow, `state.post` is getting set with `all` after hitting `fetchPost`
    return {
      post: {
        loading: false,
        loaded: false,
        postId: postId
      }

    }
  } else {
      return {
        post: state.post
      }
    }
  // if (state.posts.all !== []) {
  //   const post = state.posts.all.find((post) => post.id === parseInt(ownProps.match.params.id))
  //   return { post: post }
  // } else {
  //   return { post: {} }
  // }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPost: fetchPost
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
