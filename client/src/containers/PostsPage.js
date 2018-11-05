import React, { Component } from 'react';
import { fetchPosts } from '../actions/postActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostForm from './PostForm';
import PostsList from '../components/PostsList';
import { LoadingPage } from '../components/LoadingPage';

class PostsPage extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    let hasData = (this.props.posts.loaded && !this.props.posts.loading)

    return (
      <div className="PostsPage">
        { hasData ? (
          <React.Fragment>
            <PostForm />
            <PostsList postsList={this.props.posts.all} />
          </React.Fragment>
        ) : (
          <LoadingPage />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  debugger
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPosts: fetchPosts
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
