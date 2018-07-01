import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar fixed-top text-left py-2">
        <NavLink className="NavLink px-1 ml-4" to="/">Home</NavLink>
        <NavLink className="NavLink px-1" to="/posts">Latest Posts</NavLink>
        <NavLink className="NavLink px-1" to="/users/:userId/posts">Your Posts</NavLink>
      </div>
    );
  };
};

export default NavBar;
