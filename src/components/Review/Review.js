  import React, {Component} from 'react';
  import axios from 'axios';
  import styles from './Review.module.css';

  class Review extends React.Component {

    state ={
      reviews: '',

    };

    componentDidMount() {
      const URL = 'http://localhost:3000/reviews';
      axios.get(URL)
      .then( res => {
        console.log('response:', res.data);
        this.setState({reviews: res.data})
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
