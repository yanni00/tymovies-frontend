import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './TrendingMovies.module.css'

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
      this.setState({ movies: res.data.results.slice(0, 18)})
    })
    .catch( err => {
      console.warn( err );
    });
  }

  render(){

    return (
      <div className={styles.container}>
        <h3 className={styles.trendingMoviesHeader}>Trending This Week</h3>

        {
          this.state.movies.length >= 1
          ?
          this.state.movies.map( movie =>   (
             <Link className={styles.trendingMoviesLinks} to={`/movies/${movie.id}`} key={movie.id}>
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
