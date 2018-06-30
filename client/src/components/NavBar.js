import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
// import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">{`8bD`}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>
            <NavItem eventKey={2} href="/posts">
              Latest Posts
            </NavItem>
          </Nav>
          <Nav pullRight>
          <NavDropdown eventKey={1} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={1.1}>Login</MenuItem>
            <MenuItem eventKey={1.2}>Sign up</MenuItem>
            <MenuItem eventKey={1.3} href="/users/:userId/posts">Your Posts</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.3} href="#">Logout</MenuItem>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>;
      // <NavLink className="NavLink" to="/">Home</NavLink>
      // <NavLink className="NavLink" to="/posts">Latest Posts</NavLink>
      // <NavLink className="NavLink" to="/users/:userId/posts">Your Posts</NavLink>
    </div>
  );
};

export default NavBar;
