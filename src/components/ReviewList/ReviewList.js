import React, {Component} from 'react';
import axios from 'axios';

import styles from './ReviewList.module.css';
import ReviewForm from '../ReviewForm/ReviewForm';

  const REVIEWS_URL = 'http://localhost:3000/reviews/';
  const COMMENT_URL = 'http://localhost:3000/comments';


  class ReviewList extends React.Component {

    state ={
      reviews: [],
      comment: '',
      visibleCommentForReviewId: null
    };

    componentDidMount() {

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
      // this.setState({ comment:  });
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
        this.addComment(res.data);
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
          {this.state.reviews.map( review => (
            <div key={review.id} style={{border: '1px solid grey', padding: '20px', width: '60%' }} >
              <h4>{review.name}</h4>
              <p>{review.userReview}</p>
              <h4>{review.user.name}</h4>
              {
                new Date(review.created_at).toLocaleDateString("en-AU", { hour: 'numeric', minute: 'numeric',  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
              }
                <br/>
                <br/>

              {
                review.comments.map( comment => (
                  <div key={comment.id} style={{border: '1px solid grey', padding: '20px', width: '60%'}}>
                    <h2>Comments</h2>
                    <h4>{ comment.body }</h4>
                    <h4>{ comment.user.name }</h4>
                      {
                        new Date(review.created_at).toLocaleDateString("en-AU", { hour: 'numeric', minute: 'numeric',  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
                      }
                  </div>
                ))
              }

              {
                this.state.visibleCommentForReviewId === review.id
                ?
              <form
                id={review.id} className={styles.form} onSubmit={this.handleSubmit}>
                  <textarea rows="10" cols="35" type="text" id={review.id} onChange={this.handleInput}/>
                  <br/>
                  <input className={styles.inputButton} type="submit" value="Comment" />

                </form>
                :
                <button onClick={ () => this.setState({ visibleCommentForReviewId: review.id }) }>Add Comment</button>
              }

            </div>
          ))
        }



        </div>
      );
    }
}


export default ReviewList;
