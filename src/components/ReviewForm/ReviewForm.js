

  import axios from 'axios';
  import React from 'react';
  import styles from './ReviewForm.module.css'

  const URL = 'http://localhost:3000/reviews';
  class ReviewForm extends React.Component {

    state = {
      name: '',
      content:''
    };

    handleInput = event => {
      this.setState({ name: event.target.value });
    }

    handleTextarea = event => {
      this.setState({ content: event.target.value });
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.handleSubmit(event)
      axios.post(URL, {
        name: this.state.name,
        content: this.state.content
      })
      .then( res => {
        console.log('response:', res.data);

        // this.setState({reviews: res.data})
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
            this.props.handleSubmit
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
