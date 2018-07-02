import React, { Component } from 'react';
// import '../components/NavBar.css';
import { fetchPosts } from '../actions/postActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostsList from '../components/PostsList.js';
import PostForm from './PostForm.js';

class PostsPage extends Component {

  // componentDidMount() {
  //   this.props.fetchPosts();
  // }

  render(props) {

    return (
      <div className="PostsPage">
        <PostForm />
        <PostsList postsList={this.props.posts}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     fetchPosts: fetchPosts
//   }, dispatch);
// };

export default connect(mapStateToProps)(PostsPage);
