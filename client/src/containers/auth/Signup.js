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

  onSignup = event => {
    event.preventDefault();
    // debugger

    this.props.createUser(this.state);
      // find way to set these all back to default
      // event.currentTarget.reset()
      this.refs.titleInput.value = '';
      this.refs.gameInput.value = '';
      this.refs.authorInput.value = '';
      this.refs.discussionInput.value = '';
      this.refs.ratingInput.value = '';

  }

  render() {
    // debugger
    // --template--
    // <p>
    //   <input ref="authorInput" type="text" name="authorName" placeholder="Author" value={this.state.author} onChange={this.onSignup} />
    // </p>
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="FormUp col-6 p-4 my-4">
            <h3>Join the conversation!</h3>
            <form id="post-form" onSubmit={this.onSubmitHandler.bind(this)}>
              <p>
                <input className="mr-2" ref="username" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.onSignup} />
                <input className="ml-2" ref="email" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.onSignup} />
              </p>
              <p>
                <textarea ref="password" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onSignup} />
              </p>
              <button type="submit">Signup</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createUser: createUser
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(PostForm);
