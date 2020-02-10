
  import React from 'react';
  import axios from 'axios';
  import styles from './GenreShow.module.css';
  import { Link } from 'react-router-dom';

  class GenreShow extends React.Component {

    state = {
      movies: [],
    };

    componentDidMount() {
      const URL = `https://api.themoviedb.org/3/discover/movie?api_key=24d863d54c86392e6e1df55b9a328755&with_genres=${this.props.match.params.id}`;
      axios.get(URL)
      .then( res => {
        console.log('response:', res.data.results);
        this.setState({ movies: res.data.results.slice(0, 12)})
      })
      .catch( err => {
        console.warn( err );
      });
    }


    render(){
      return(
        <div className={styles.container}>
          <h2 className={styles.Header}>{this.props.match.params.name}</h2>

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
    }
  }





  export default GenreShow;
