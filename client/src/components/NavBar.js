import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar fixed-top text-left py-2">
        <NavLink className="NavLink px-1 ml-4 text-light" to="/">Home</NavLink>
        <NavLink className="NavLink px-1 text-light" to="/posts">Latest Posts</NavLink>
        <NavLink className="NavLink px-1 text-light" to="/users/:userId/posts">Your Posts</NavLink>
      </div>
    );
  };
};

export default NavBar;


// TODO
// {authUser ? <NavBarAuth /> : <NavBarNoAuth />}

// const NavBarAuth = () => {
//   
//       <div className="NavBar fixed-top text-left py-2">
//         <NavLink className="NavLink px-1 ml-4 text-light" to="/">Home</NavLink>
//         <NavLink className="NavLink px-1 text-light" to="/posts">Latest Posts</NavLink>
//         <NavLink className="NavLink px-1 text-light" to="/users/:userId/posts">Your Posts</NavLink>
//         <NavLink className="NavLink px-1 text-light" to="/users/:userId">Account</NavLink>
//         <NavLink className="NavLink px-1 text-light" to="/logout">Logout</NavLink>
//       </div>
// };

// TODO
// const mapStateToProps = (state) => ({
//     authUser: state.sessionState.authUser
// })