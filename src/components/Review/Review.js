import React, {Component} from 'react';
import axios from 'axios';
import CommentForm from '../CommentForm/CommentForm';
import styles from './Review.module.css';


const URL = 'http://localhost:3000/';
const URL_USER = 'http://localhost:3000/api/user_token'
const URL_COMMENTS = 'http://localhost:3000/comments'

class Review extends React.Component {

  state ={
    reviews: [],
  };

  componentDidMount() {

    axios.get(URL + "reviews")
    .then( res => {
      console.log('response:', res.data);
      this.setState({reviews: res.data})
    })
    .catch( err => {
      console.warn( err );
    });
  }

  handleSubmit = (comment, reviewId) => {
    // event.preventDefault()
    // console.log('event', event.target.id);
    // // console.log('review_id', review_id);

    const jwt = localStorage.getItem('jwt')

    axios.get(URL_USER, {
      headers:{
      Authorization: "Bearer" + jwt
      }})
      .then( result => {
      const user_id = result.data.userId;

      axios.post(URL_COMMENTS, {
      userReview: ,
      review_id: ,
      user_id:
      }).then( res => {} )
      .catch(err => console.log(err))
    })
  }

  render(){
    return(
      <div>
        <h2>Reviews</h2>
        {this.state.reviews.map( review => (
          <div key={review.id}>
            <h4>{review.name}</h4>
            <p>{review.userReview}</p>

            <h4>{review.user.name}</h4>

            <CommentForm reviewId={review.id} onSubmit={handleSubmit} />
          </div>
        ))
      }



      </div>
    );
  }
}


export default Review;
