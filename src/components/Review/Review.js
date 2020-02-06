  import React, {Component} from 'react';
  import axios from 'axios';
  import styles from './Review.module.css';

  const URL = 'http://localhost:3000/';


  class Review extends React.Component {

    state ={
      reviews: [],
      comments: ''
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

    handleInput = (event) => {
      this.setState({comment: event.target.value});
    }

    handleSubmit = (event) => {
      event.preventDefault()
      console.log('event', event.target.id);
      // console.log('review_id', review_id);

      // axios.post(URL + "comments")
    }

    render(){
      return(
        <div>
          <p>Reviews here for movie ID: {this.props.movieId}</p>
          {this.state.reviews.map( review => (
            <div key={review.id}>
              <h2>{review.name}</h2>
              <p>{review.userReview}</p>
              <h3>{review.user.name}</h3>

              <form
                id={review.id} className={styles.form} onSubmit={this.handleSubmit}>
                  <textarea rows="12" cols="55" type="text" onChange={this.handleInput}/>
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
