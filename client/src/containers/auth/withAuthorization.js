// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { compose } from 'recompose';
// import { withRouter } from 'react-router-dom';

// // TODO: reducers/actions?
// import * as routes from '../constants/routes';

// const withAuthorization = (authCondition) => (Component) => {
//     class WithAuthorization extends React.Component {
//     componentDidMount() {
//     // TODO: refactor to use Rails auth
//       firebase.auth.onAuthStateChanged(authUser => {
//         if (!authCondition(authUser)) {
//           this.props.history.push(routes.SIGN_IN);
//         }
//       });
//     }

//     render() {
//       return this.props.authUser ? <Component /> : null;
//     }
//   }

//   const mapStateToProps = (state) => ({
//     authUser: state.sessionState.authUser
//   });

//   return compose(
//     withRouter,
//     connect(mapStateToProps)
//   )(WithAuthorization);

//   // return WithAuthorization;
//   // return withRouter(WithAuthorization);
// }

// export default withAuthorization;
