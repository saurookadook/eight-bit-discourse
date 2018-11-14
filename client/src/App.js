import React, { Component } from 'react';
import './styles/css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Static
import NavBar from './components/NavBar';
import { PageLayout } from './components/PageLayout'
import { Welcome } from './components/Welcome';
import { Footer } from './components/Footer';

// Content
import PostsPage from './containers/PostsPage';
import PostPage from './containers/PostPage';
// import UserPostsPage from './containers/UserPostsPage';

// User Auth
import SignUpForm from './containers/auth/SignUp';

import * as routes from './constants/routes';

class App extends Component {
  // TODO
  // <Route exact path="/users/:id/posts" component={UserPostsPage} />
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <PageLayout />
          <div className="container">
            <Route exact path={routes.HOME} component={Welcome} />
            <Route exact path={routes.POSTS} component={PostsPage} />
            <Route exact path="/posts/:id" component={PostPage} />
            <Route exact path={routes.SIGN_UP} component={SignUpForm} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
