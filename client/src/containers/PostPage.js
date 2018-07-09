import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/css/App.css';
import PostDisplay from '../components/PostDisplay';
import { LoadingPage } from '../components/LoadingPage';
import { fetchPost } from '../actions/postActions';

class PostPage extends Component {

  componentDidMount() {
    this.props.fetchPost(this.props.post)
  }

  render() {
    return (
      <div className="PostPage">
        {(this.props.post.loaded && !this.props.post.loading) ? (
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
  if (!state.post.loaded) { // somehow, `state.post` is getting set with `all` after hitting `fetchPost`
    let postId = parseInt(ownProps.match.params.id)
    return {
      post: {
        loading: false,
        loaded: false,
        postId: postId
        // postBody: postBody
      }
    }
  } else {
    return {
      post: state.post
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPost: fetchPost
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
