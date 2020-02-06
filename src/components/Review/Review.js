  import React, {Component} from 'react';
  import axios from 'axios';
  import styles from './Review.module.css';

  class Review extends React.Component {

    state ={
      name: '',
      movieTitle: '',
      movieRating: '',
      userReview: '',
      created_at: '',
      updated_at: ''
    };

    componentDidMount() {
      const URL = 'http://localhost:3000/reviews';
      axios.get(URL)
      .then( res => {
        console.log('response:', res);
        
      })
    }

    render(){
      return(
        <div>

        </div>
      );
    }

  }

  export default Review;
