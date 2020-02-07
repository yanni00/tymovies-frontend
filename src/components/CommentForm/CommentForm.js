import React, {Component} from 'react';
import axios from 'axios';
import styles from './CommentForm.module.css';

const URL_USER = 'http://localhost:3000/commentsto';

class CommentForm extends Component {

  state = {
    body: '',
    user_id:'',
    review_id:''
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
  handleSubmit = event => {
    event.preventDefault()
    this.login(this.state.body,
    this.state.user_id, this.state.review_id)
  }
  render(){
    return
  }
}
export default CommentForm;
