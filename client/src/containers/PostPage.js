import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/css/App.css';
import CommentForm from './CommentForm';
import CommentsList from '../components/CommentsList';
import { fetchPost } from '../actions/postActions';
import { fetchComments } from '../actions/commentActions';

class PostPage extends Component {

  componentDidMount() {
    this.props.fetchPost({postId: this.props.post.id})
    this.props.fetchComments(this.props.post.id)
  }

  render(props) {
    console.log(this.props)
    const post = this.props.post;
    console.log(post)
    return (
      <div className="mainPostDiv">
        <div className="postDiv">
          <h2 className="title">{post.title}</h2>
          <p className="game">{post.game}</p>
          <p className="author">By: {post.author.username}</p>
          <p className="rating">Rating: {post.rating} stars</p>
          <p className="discussion">Summary: {post.discussion}</p>
        </div>

        <div className="comments">
          <CommentsList comments={post.comments} />
          <CommentForm postId={this.props.match.params.id} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  if (typeof state.post !== "undefined") {
    // const post = state.posts.find(post => post.id === parseInt(ownProps.match.params.id))
    return Object.assign({}, state, post: state.post)
  } else {
    return Object.assign({}, state, post: {author: {username: ""}})
  }
}

const mapDispatchToProps = (dispatch) => {
  // debugger
  return bindActionCreators({
    fetchPost: fetchPost,
    fetchComments: fetchComments
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
