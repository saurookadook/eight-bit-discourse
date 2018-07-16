import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitComment } from '../actions/commentActions.js';


class CommentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // postId: props.postId,
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
    // debugger
    event.preventDefault()
    // debugger
    let formContent = Object.assign({}, this.state, {postId: this.props.postId})
    this.props.submitComment(formContent);
    this.refs.userInput.value = '';
    this.refs.contentInput.value = '';
  }

  render() {
    // debugger
    // eventually have user input default to logged in user? (or provide that information via hidden inputs?)
    // <input ref="userId" type="hidden" naame="userId" value={this.state.user.id} />
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="FormUp col-8 p-3 my-4">
            <h3>Add a comment:</h3>
            <form className="CommentForm" onSubmit={this.handleOnSubmit.bind(this)}>
              <input ref="postId" type="hidden" name="post" value={this.props.postId} />
              <input ref="userInput" type="text" name="user" placeholder="Name" value={this.state.user} onChange={this.handleOnChange} />
              <input ref="contentInput" className="mx-2" type="text" name="content" placeholder="Content" value={this.state.content} onChange={this.handleOnChange} />
              <button type="submit">Add a comment</button>
            </form>
          </div>
        </div>
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
