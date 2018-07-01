// import React, { Component } from 'react';
// // import '../components/NavBar.css';
// import { fetchPosts } from '../actions/postActions.js';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import UserPostsList from '../components/UserPostsList.js';
// import { Link } from 'react-router-dom';
//
// class UserPostsPage extends Component {
//
//   componentDidMount() {
//     this.props.fetchUserPosts();
//   }
//
//   render() {
//
//     return (
//       <div className="PostsPage">
//         <Link to={`/users`}
//         <UserPostsList postsList={this.props.user.posts}/>
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     fetchUserPosts: fetchUserPosts
//   }, dispatch);
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(UserPostsPage);
