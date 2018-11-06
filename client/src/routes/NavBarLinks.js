import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { logout } from '../actions/authActions';

class NavBarLinks extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }

  render() {
    const logoLink = (
      <li id="logo"><Link to="/">Home</Link></li>
    )

    // TODO: Make About page
    // <li><Link to="/about">About</Link></li>
    const mainNav = (
      <ul>
        {logoLink}
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    )

    // TODO: add UserPosts route
    // <li><Link to="/users/${user.id}/posts">Your Posts</Link></li>
    // <li><Link to="/users/${user.id}">Profile</Link></li>
    const userNav = (
      <ul>
        {logoLink}
        <li><Link to="/posts">Latest Posts</Link></li>
        <li onClick={(e) => this.handleLogout(e)}>Log Out</li>
      </ul>
    );

    return (
      <header>
        <nav>
          {this.props.isAuthenticated ? userNav : mainNav}
        </nav>
      </header>
    )
  }
}

export default NavBarLinks = withRouter(connect(null, { logout })(NavBarLinks));
