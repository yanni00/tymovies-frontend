

  import axios from 'axios';
  import React from 'react';


  const URL = 'http://localhost:3000/reviews';
  class ReviewForm extends React.Component {

    state = {
      name: '',
      content:'',
      movieId: ''
    };

    handleInput = event => {
      this.setState({ name: event.target.value });
    }

    handleTextarea = event => {
      this.setState({ content: event.target.value });
    }

    handleSubmit = (event) => {

      event.preventDefault();

      // this.props.handleSubmit(event)

      const token = localStorage.getItem('auth_token');

      axios.post(URL,
      // form data (becomes params in Rails)
      {
        name: this.state.name,
        content: this.state.content,
        movieId: this.props.movieId

      },
      // config:
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then( res => {
        console.log('response:', res.data);
        this.props.onReviewAdded(res.data);

      })
      .catch( err => {
        console.warn( err );
      });
    }

    render(){
      return(
        <div>
          <h2>Add your review</h2>

          <form onSubmit={this.handleSubmit}>

          <input placeholder="Name" type="text" onChange={this.handleInput}/>

          <br/>

          <textarea type="text" placeholder="Review" onChange={this.handleTextarea}/>

          <br/>

          <input type="submit" value="Add review" />

          </form>
        </div>
      );
    }
  }





  export default ReviewForm;
