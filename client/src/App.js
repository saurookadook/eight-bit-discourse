import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  NavBar  from './components/NavBar';
import PostsPage from './containers/PostsPage'
import PostPage from './containers/PostPage'
import { Home } from './components/Home';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" component={Home} />
          <Route exact path="/posts" component={PostsPage} />
          <Route exact path="/posts/:postId" component={PostPage} />
        </div>
      </Router>
    );
  }
}

export default App;
