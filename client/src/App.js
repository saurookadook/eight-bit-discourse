import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Static
import NavBar from './components/NavBar';
import { PageLayout } from './components/PageLayout'
import { Welcome } from './components/Welcome';
import { Footer } from './components/Footer';

// Content
import PostsPage from './containers/PostsPage';
import PostPage from './containers/PostPage';
import AccountPage from './components/AccountPage';
// import UserPostsPage from './containers/UserPostsPage';

// User Auth
import LogInForm from './containers/auth/LogIn';
import SignUpForm from './containers/auth/SignUp';

import * as routes from './constants/routes';
import './styles/css/App.css';

class App extends Component {
  // TODO
  render() {
    const { isAuthenticated, user } = this.props

    const publicViews = (
      <div className="container">
        <Route exact path={routes.HOME} component={Welcome} />
        <Route exact path={routes.POSTS} component={PostsPage} />
        <Route exact path={routes.POST} component={PostPage} />
        <Route exact path={routes.LOG_IN} component={LogInForm} />
        <Route exact path={routes.SIGN_UP} component={SignUpForm} />
      </div>
    )

    const protectedViews = (
      <div className="container">
        <Route exact path={routes.HOME} component={Welcome} />
        <Route exact path={routes.POSTS} component={PostsPage} />
        <Route exact path={routes.POST} component={PostPage} />
        {/* <Route exact path={routes.USERS} component={UsersList} /> */}
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage user={user} />} /> 
        {/* <Route exact path={routes.USERS_POSTS} component={UserPostsPage} /> */}
        {/* <Route exact path={routes.LOG_OUT} component={LogOut} /> */}
      </div>
    )

    return (
      <Router>
        <div className="App">
          <NavBar />
          <PageLayout />
          { isAuthenticated ? protectedViews : publicViews }
          {/* <div className="container">
            <Route exact path={routes.HOME} component={Welcome} />
            <Route exact path={routes.POSTS} component={PostsPage} />
            <Route exact path={routes.POST} component={PostPage} />
            <Route exact path={routes.LOG_IN} component={LogInForm} />
            <Route exact path={routes.SIGN_UP} component={SignUpForm} />
          </div> */}
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

// export default App = connect(mapStateToProps, {})(App);

export default connect(mapStateToProps)(App);
// export default App;
