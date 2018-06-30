import React, { Component } from 'react';
import '../components/NavBar.css';
import { fetchPosts } from '../actions/postActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostsList from '../components/PostsList.js';
import PostForm from './PostForm.js';

class PostsPage extends Component {
  componentDidMount() {
    console.log(this.props.fetchPosts())
    this.props.fetchPosts();
  }

  render() {

    return (
      <div className="PostsPage">
        <PostForm />
        <PostsList postsList={this.props.posts}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
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
