import React, {Component} from 'react';
import axios from 'axios';

import styles from './ReviewList.module.css';
import ReviewForm from '../ReviewForm/ReviewForm';

  let REVIEWS_URL = '';
    if (process.env.NODE_ENV !== 'production') {
      REVIEWS_URL = 'http://localhost:3000/reviews/';
    } else {
      REVIEWS_URL = 'https://tymovie-server.herokuapp.com/reviews/';
    }

  let COMMENT_URL = '';
    if (process.env.NODE_ENV !== 'production') {
      COMMENT_URL = 'http://localhost:3000/comments/';
    } else {
      COMMENT_URL = 'https://tymovie-server.herokuapp.com/comments/';
    }

  class ReviewList extends React.Component {

    state ={
      reviews: [],
      comment: '',
      visibleCommentForReviewId: null
    };

    componentDidMount() {

      this.getReviews();

    }

    getReviews() {
      const token = localStorage.getItem('auth_token');

      axios.get(REVIEWS_URL + this.props.movieId, {
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

    addReview = (review) => {
      console.log('in ReviewList:addReview(), got arg:', review);
      this.setState({ reviews: [ review, ...this.state.reviews ] });
    }

    addComment = (comment) => {
      console.log('in ReviewList:addComment(), got arg:', comment);
      this.getReviews();

    }

    handleInput = (event) => {

      this.setState({comment: event.target.value});
      console.log(event.target.id)
      console.log(event.target.value)
    }

    handleSubmit = (event) => {
      event.preventDefault()
      console.log('event', event.target.id);



      const comment = this.state.comment;
      const reviewId = this.state.visibleCommentForReviewId;

      // console.log('review_id', review_id);

      const token = localStorage.getItem('auth_token')

      axios.post( COMMENT_URL,
        {
          body: comment,
          review_id: reviewId
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
      })
      .then( res => {
        console.log('comment response:', res.data);
        if( comment.length !== 0 ){
        this.addComment(res.data);

          this.setState({ visibleCommentForReviewId: null })
        } else {
          console.log('Please comment')
        }
      })
      .catch( err => {
        console.warn( err );
      });

    }

    render(){
      return(
        <div>

          <ReviewForm
            movieId={this.props.movieId}
            onReviewAdded={ this.addReview }
            />

          <h2>Reviews</h2>
          <br/>
          {this.state.reviews.map( review => (
            <div key={review.id} style={{border: '1px solid grey', padding: '60px', width: '60%' }} >
              <h3>{review.name}</h3>
              <h3>{review.userReview}</h3>
              <p>{review.user.name}</p>
              <p>
                {
                new Date(review.created_at).toLocaleDateString("en-AU", { hour: 'numeric', minute: 'numeric',  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
                }
              </p>
                <br/>
                <br/>
                <h2>Comments</h2>
                <br/>
              {
                review.comments.map( comment => (
                  <div  className={styles.comment} key={comment.id} style={{border: '1px solid grey', padding: '30px', width: '60%'}}>

                    <h3>{ comment.body }</h3>
                    <p>{ comment.user.name }</p>
                    <p>
                      {
                        new Date(review.created_at).toLocaleDateString("en-AU", { hour: 'numeric', minute: 'numeric',  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
                      }
                    </p>
                  </div>
                ))
              }

              {
                this.state.visibleCommentForReviewId === review.id
                ?
              <form
                id={review.id} className={styles.form} onSubmit={this.handleSubmit}>
                  <textarea className={styles.textarea} rows="10" cols="35" type="text" id={review.id} onChange={this.handleInput}/>
                  <br/><br/>
                  <input className={styles.inputButton} type="submit" value="Comment" />

                </form>

                :

                <button className={styles.button} onClick={ () => this.setState({ visibleCommentForReviewId: review.id }) }>Add Comment</button>
              }

            </div>
          ))
        }



        </div>
      );
    }
}


export default ReviewList;
