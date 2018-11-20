import React from 'react';
import { connect } from 'react-redux';
// import { compose } from 'recompose';

// import { PasswordForgetForm } from './PasswordForget';
// import PasswordChangeForm from './PasswordChange';
// import withAuthorization from './withAuthorization';

const AccountPage = ({ user }) =>
  <div>
    <h1>Attributes</h1>
    <p>Username: {user.username}</p>
    <p>Email: {user.email}</p>
    {/* <PasswordForgetForm />
    <PasswordChangeForm /> */}
  </div>

const mapStateToProps = (state) => { 
  return { ...state }
};

// const authCondition = (authUser) => !!authUser;

// export default compose(
//   withAuthorization(authCondition),
//   connect(mapStateToProps)
// )(AccountPage);

export default connect(mapStateToProps)(AccountPage);
