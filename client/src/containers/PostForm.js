import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitPost } from '../actions/postActions.js';
import '../styles/css/App.css';

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      game: '',
      authorName: '',
      discussion: '',
      rating: ''
    }
  }

  onChangeHandler = event => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    });
  }

  onSubmitHandler = event => {
    event.preventDefault();
    // debugger
    this.props.submitPost(this.state);
      this.refs.titleInput.value = '';
      this.refs.gameInput.value = '';
      this.refs.authorInput.value = '';
      this.refs.discussionInput.value = '';
      this.refs.ratingInput.value = '';
  }

  render() {
    // debugger
    return (
      <div className="form">
        <h3>Anything to discuss with the hive mind?</h3>
        <form id="post-form" onSubmit={this.onSubmitHandler}>
          <p>
            <input ref="titleInput" type="text" name="title" placeholder="Title/Topic" value={this.state.title} onChange={this.onChangeHandler} />
            <input ref="gameInput" type="text" name="game" placeholder="Game" value={this.state.game} onChange={this.onChangeHandler} />
          </p>
          <p>
            <input ref="authorInput" type="text" name="authorName" placeholder="Author" value={this.state.author} onChange={this.onChangeHandler} />
          </p>
          <p>
            <textarea ref="discussionInput" name="discussion" className="textarea" placeholder="Your thoughts...." value={this.state.discussion} onChange={this.onChangeHandler} />
          </p>
          <p>
            How would you rate this game?
            <input ref="ratingInput" type="number" name="rating" placeholder="Rating (1-10)" value={this.state.rating} onChange={this.onChangeHandler} />
          </p>
          <button type="submit">Add a post</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    submitPost: submitPost
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(PostForm);
