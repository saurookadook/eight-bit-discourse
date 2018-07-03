import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/css/App.css';
import PostDisplay from '../components/PostDisplay';
import CommentForm from './CommentForm';
import CommentsList from '../components/CommentsList';
// import { fetchPost } from '../actions/postActions';
// import { fetchComments } from '../actions/commentActions';

class PostPage extends Component {

  // componentDidMount() {
  //   this.props.fetchPost({postId: this.props.post.id})
  //   this.props.fetchComments(this.props.post.id)
  // }

  render(props) {
    // debugger
    // const post = this.props.post;
    return (
      <div className="mainPostDiv">
        <PostDisplay post={this.props.post} />
        <div className="comments">
          <CommentsList comments={this.props.post.comments} />
          <CommentForm postId={this.props.match.params.id} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // return {
  //   post: state.post,
  //   comments: state.post.comments
  // }
  if (state.posts !== []) {
    const post = state.posts.find((post) => post.id === parseInt(ownProps.match.params.id))
    return { post: post }
  } else {
    return { post: {} }
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     fetchPost: fetchPost
//     // fetchComments: fetchComments
//   }, dispatch);
// };

export default connect(mapStateToProps)(PostPage);
