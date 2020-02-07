import React, {Component} from 'react';
import axios from 'axios';
import CommentForm from '../CommentForm/CommentForm';
import styles from './ReviewList.module.css';
import ReviewForm from '../ReviewForm/ReviewForm';

  const URL = 'http://localhost:3000/reviews/';


  class ReviewList extends React.Component {

    state ={
      reviews: [],
    };

    componentDidMount() {

      const token = localStorage.getItem('auth_token');

      axios.get(URL + this.props.movieId, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then( res => {
        console.log('response:', res.data);
        this.setState({reviews: res.data})
      })
      .catch( err => {
        console.warn( err );
      });
    }

    // onReviewAdded = ()

    handleInput = (event) => {

      this.setState({[event.target.id]: event.target.value});
      console.log(event.target.id)
      console.log(event.target.value)
    }

    handleSubmit = (event) => {
      event.preventDefault()
      console.log('event', event.target.id);
      // console.log('review_id', review_id);
    }


    render(){
      return(
        <div>

          <ReviewForm
            movieId={this.props.movieId}
            onReviewAdded={ this.addReview }
            />

          <h2>Reviews</h2>
          {this.state.reviews.map( review => (
            <div key={review.id}>
              <h4>{review.name}</h4>
              <p>{review.userReview}</p>

              <h4>{review.user.name}</h4>

              <form
                id={review.id} className={styles.form} onSubmit={this.handleSubmit}>
                  <textarea rows="10" cols="35" type="text" id={review.id} onChange={this.handleInput}/>
                  <br/>
                  <input className={styles.inputButton} type="submit" value="Comment" />
                </form>
            </div>
          ))
        }



        </div>
      );
    }
}


export default ReviewList;
