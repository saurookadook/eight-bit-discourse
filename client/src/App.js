import React, { Component } from 'react';
import './styles/css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import PostsPage from './containers/PostsPage';
import PostPage from './containers/PostPage';
import UserPostsPage from './containers/UserPostsPage';
import { PageLayout } from './components/PageLayout'
import { Welcome } from './components/Welcome';
import { Footer } from './components/Footer';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <PageLayout />
          <div className="container">
            <Route exact path="/" component={Welcome} />
            <Route exact path="/posts" component={PostsPage} />
            <Route exact path="/posts/:id" component={PostPage} />
            <Route exact path="/users/:id/posts" component={UserPostsPage} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
