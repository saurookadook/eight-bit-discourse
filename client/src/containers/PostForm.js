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
      discussion: '',
      rating: ''
    }
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    this.props.submitPost(this.state);
      this.refs.nameInput.value = '';
      this.refs.gameInput.value = '';
      this.refs.discussionInput.value = '';
      this.refs.ratingInput.value = '';
  }

  render() {
    return (
      <div className="form">
        <h3>What would you like to discuss with the hive mind?</h3>
        <form id="post-form" onSubmit={this.onSubmitHandler}>
          <p>
            <input ref="nameInput" type="text" name="title" placeholder="Title/Topic" value={this.state.title} onChange={this.onChangeHandler}/>
            <input ref="gameInput" type="text" name="game" placeholder="Game" value={this.state.game} onChange={this.onChangeHandler}/>
          </p>
          <p>
            <textarea ref="discussionInput" name="discussion" className="textarea" placeholder="Your thoughts...." value={this.state.discussion} onChange={this.onChangeHandler}/>
          </p>
          <p>
            How would you rate this game?
            <input ref="ratingInput" type="number" name="rating" placeholder="Rating (1-10)" value={this.state.rating} onChange={this.onChangeHandler}/>
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
