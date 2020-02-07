import React, {Component} from 'react';
import axios from 'axios';
import styles from './Review.module.css';

class Review extends React.Component {

  state ={
    reviews: '',

  };

  const URL = 'http://localhost:3000/reviews';


  class Review extends React.Component {

    state ={
      reviews: [],
    };

    componentDidMount() {

      const token = localStorage.getItem('auth_token');

      axios.get(URL, {
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
          <h2>Reviews</h2>
          {this.state.reviews.map( review => (
            <div key={review.id}>
              <h4>{review.name}</h4>
              <p>{review.userReview}</p>

              <h4>{review.user.name}</h4>

              <form
                id={review.id} className={styles.form} onSubmit={this.handleSubmit}>
                  <textarea rows="12" cols="55" type="text" id={review.id} onChange={this.handleInput}/>
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


export default Review;
