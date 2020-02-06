
  import React from 'react';
  import axios from 'axios';
  import styles from './GenreShow.module.css';

  class GenreShow extends React.Component {

    state = {
      genre: {},
    };

    componentDidMount() {
      const URL = `https://api.themoviedb.org/3/discover/movie?api_key=24d863d54c86392e6e1df55b9a328755&with_genres=${this.props.match.params.id}`;
      axios.get(URL)
      .then( res => {
        console.log('response:', res);
        this.setState({ movies: res})
      })
      .catch( err => {
        console.warn( err );
      });
    }


    render(){
      return(
        <div>
          <h2>{this.props.match.params.name}</h2>
        </div>
      );
    }
  }





  export default GenreShow;
