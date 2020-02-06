  import React, {Component} from 'react';
  import axios from 'axios';
  import styles from './Review.module.css';

  class Review extends React.Component {

    state ={
      review: '',

    };

    componentDidMount() {
      const URL = 'https://localhost:3000/reviews';
      axios.get(URL)
      .then( res => {
        console.log('response:', res.data);
        this.setState({review: res.data})
      })
      .catch( err => {
        console.warn( err );
      });
    }

    render(){
      return(
        <div>
          <h2>reviews here for movie ID : {this.props.movieId}</h2>
        </div>
      );
    }

  }

  export default Review;
