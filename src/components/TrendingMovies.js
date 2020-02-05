import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Search extends React.Component {

  state = {
    movies: [],
  }

  componentDidMount() {
    // This is where we make our Axios call
    const URL = 'https://api.themoviedb.org/3/trending/all/week?api_key=24d863d54c86392e6e1df55b9a328755';
    axios.get(URL)
    .then( res => {
      console.log('response:', res.data.results);
      this.setState({ movies: res.data.results.slice(0, 14)})
    })
    .catch( err => {
      console.warn( err );
      console.log( 'nupppppp wrong!')
    });
  }

  render(){

    return (
      <div>
        <h3>Trending This Week</h3>

        {
          this.state.movies.length >= 1
          ?
          this.state.movies.map( movie =>   (
             <Link to={`/movies/${movie.id}`} key={movie.id}>
               <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}/>
             </Link>
          ))
          :
          <p>Loading...Please wait</p>
        }



      </div>
    );
  } //render
} // class

export default Search;
