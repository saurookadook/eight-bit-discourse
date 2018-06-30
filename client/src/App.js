import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  NavBar  from './components/NavBar';
import PostsPage from './containers/PostsPage'
import PostPage from './containers/PostPage'
import { Home } from './components/Home';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from './actions/postActions'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" component={Home} />
          <Route exact path="/posts" component={PostsPage} />
          <Route exact path="/posts/:postId" component={PostPage} />
          // <Route exact path="/users/:userId/posts" component={UserPostsPage} />
        </div>
      </Router>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
