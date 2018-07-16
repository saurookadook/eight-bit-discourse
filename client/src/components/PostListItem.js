import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostListItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      post: props.post,
      votes: 0
    }
  }

  onClickHandler = event => {
    event.preventDefault();
    // debugger
    this.setState({
      votes: this.state.votes += 1
    })
    // this.setState((prevState, props) => {
    //   debugger
    //   return {post: prevState.post, votes: prevState.votes++}
    // })
  }

  render() {
    return (
      <div className="CloudBubble p-2 my-2">
        <Link className="text-dark" to={`/posts/${this.state.post.id}`}>
          <h3>{this.state.post.title}</h3>
        </Link>
        <div>
          <p>Author: {this.state.post.author.username} || Game of discussion: {this.state.post.game} || <button onClick={this.onClickHandler.bind(this)}>Votes: {this.state.votes} </button></p>
        </div>
      </div>
    )
  }
}

export default PostListItem;
