import React, {Component} from 'react';
import axios from 'axios';
import styles from './CommentForm.module.css';

// const URL_USER = 'http://localhost:3000/commentsto';
let URL_USER = '';
  if (process.env.NODE_ENV !== 'production') {
    URL_USER = 'http://localhost:3000/commentsto';
  } else {
    URL_USER = 'https://tymovie-server.herokuapp.com/commentsto';
  }


class CommentForm extends Component {

  state = {
    body: '',
    user_id:'',
    review_id:'',
    comment: ''
  };

  handleBody = event => {
    this.setState({ body: event.target.value });
  }

  handleUser_id = event => {
    this.setState({ user_id: event.target.value });
  }

  handleReview_id = event => {
    this.setState({ review_id: event.target.value })
  }

  comment = (body, user_id, review_id) => {
    console.log({
      body: this.state.body,
      user_id: this.state.user_id,
      review_id: this.state.review_id
      });
      axios.post(URL_USER, {
        body: this.state.body,
        user_id: this.state.user_id,
        review_id: this.state.review_id
      })
  }

  handleInput = event => {
    this.setState({comment: event.target.value})
    console.log(event.target.value);

  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.comment, this.props.reviewId);
  }

  render(){
    return(
      <form
        className={styles.form} onSubmit={this.handleSubmit}>
          <textarea rows="12" cols="55" type="text" onChange={this.handleInput}/>
          <br/>
          <input className={styles.inputButton} type="submit" value="Comment" />
      </form>

    )
  }
}
export default CommentForm;
