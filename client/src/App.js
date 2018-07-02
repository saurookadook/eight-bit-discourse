import React, { Component } from 'react';
// import './styles/css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  NavBar  from './components/NavBar';
import PostsPage from './containers/PostsPage';
import PostPage from './containers/PostPage';
import UserPostsPage from './containers/UserPostsPage';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from './actions/postActions';

class App extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" component={Home} />
          <Route exact path="/posts" component={PostsPage} />
          <Route exact path="/posts/:id" component={PostPage} />
          <Route exact path="/users/:id/posts" component={UserPostsPage} />
          <Footer />
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
