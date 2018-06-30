import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink className="NavLink" to="/">Home</NavLink>
      <NavLink className="NavLink" to="/posts">Latest Posts</NavLink>
      <NavLink className="NavLink" to="/users/:userId/posts">Your Posts</NavLink>
    </div>
  );
};

export default NavBar;
