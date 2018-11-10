import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/css/App.css';
import PostDisplay from '../components/PostDisplay';
import { LoadingPage } from '../components/LoadingPage';
import * as actions from '../actions';

class PostPage extends Component {

  componentDidMount() {
    this.props.fetchPost(this.props.post)
  }

  render() {
    let hasData = (this.props.post.loaded && !this.props.post.loading)
    // debugger
    return (
      <div className="PostPage">
        { hasData ? (
          <PostDisplay props={this.props} />
        ) : (
          <LoadingPage />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // find the post by id in posts
  // debugger
  if (!state.post.loaded) { // somehow, `state.post` is getting set with `all` after hitting `fetchPost`
    let postId = parseInt(ownProps.match.params.id)
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
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
