import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
import * as routes from '../constants/routes';
import './NavBar.css'

const { authToken } = localStorage.token
console.log(localStorage.token);

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar fixed-top text-left py-2">
        <NavLink className="NavLink px-1 ml-4 text-light" to={routes.HOME}>Home</NavLink>
        <NavLink className="NavLink px-1 text-light" to={routes.POSTS}>Latest Posts</NavLink>

        { authToken ? ( 
          <React.Fragment>
            <NavLink className="NavLink px-1 text-light" to={routes.USER_POSTS}>Your Posts</NavLink>
            <NavLink className="NavLink px-1 ml-4 text-light" to={routes.LOG_OUT}>Logout</NavLink>
            </React.Fragment>
         ) : (
           <React.Fragment>
            <NavLink className="NavLink px-1 ml-4 text-light" to={routes.LOG_IN}>Log In</NavLink>
            <NavLink className="NavLink px-1 ml-4 text-light" to={routes.SIGN_UP}>Sign up</NavLink>
          </React.Fragment>
        )}
        
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
//         <NavLink className="NavLink px-1 ml-4 text-light" to={routes.HOME}>Home</NavLink>
//         <NavLink className="NavLink px-1 text-light" to={routes.POSTS}>Latest Posts</NavLink>
//         <NavLink className="NavLink px-1 text-light" to="/users/:userId/posts">Your Posts</NavLink>
//         <NavLink className="NavLink px-1 text-light" to="/users/:userId">Account</NavLink>
//         <NavLink className="NavLink px-1 text-light" to="/logout">Logout</NavLink>
//       </div>
// };

// TODO
// const mapStateToProps = (state) => ({
//     authUser: state.sessionState.authUser
// })