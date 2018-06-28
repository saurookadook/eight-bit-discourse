import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  NavBar  from './components/NavBar.js';
import { Home } from './components/Home.js';
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
          <Route exact path="/posts/new" component={NewPost} />
          <Route exact path="/posts/:postId" component={PostPage} />
        </div>
      </Router>
    );
  }
}

export default App;
