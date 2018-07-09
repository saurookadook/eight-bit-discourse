import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitComment } from '../actions/commentActions.js';


class CommentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      postId: props.postId,
      user: '',
      content: ''
    }
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = event => {
    debugger
    event.preventDefault()
    // debugger
    this.props.submitComment(this.state, this.props.postId);
    this.refs.userInput.value = '';
    this.refs.contentInput.value = '';
  }

  render() {
    return (
      <div className="commentFormDiv">
        <h3>Add a comment:</h3>
        <form className="commentForm" onSubmit={this.handleOnSubmit.bind(this)}>
          // maybe have this auto generate based on logged in user?
          <input ref="postId" type="hidden" name="post" value={this.props.postId} />
          <input ref="userInput" type="text" name="user" placeholder="Name" value={this.state.user} onChange={this.handleOnChange} />
          <input ref="contentInput" type="text" name="content" placeholder="Content" value={this.state.content} onChange={this.handleOnChange} />
          <button type="submit">Add a comment</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    submitComment: submitComment
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(CommentForm);
