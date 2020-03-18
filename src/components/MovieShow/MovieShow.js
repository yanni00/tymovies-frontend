  import React from 'react';
  import axios from 'axios';
  import styles from './MovieShow.module.css';
  import ReviewList from '../ReviewList/ReviewList';

  const BASE_URL = `https://api.themoviedb.org/3/movie/`;


  class MovieShow extends React.Component {

    state = {
      movie: {}
    }

    componentDidMount() {
      axios.get(BASE_URL + this.props.match.params.id + '?api_key=24d863d54c86392e6e1df55b9a328755')
      .then( res => {

        console.log('response:', res.data);
        this.setState({ movie: res.data})

      })
      .catch( err => {
        console.warn('ERROR:', err );
      });
    } //componentDidMount()



    render() {

      const movie = this.state.movie;

      return (
        <div className={styles.container}>
          {
            movie.id
            ?
            <div className={styles.content}>
              <div className={styles.movieImgBox}>
                <img className={styles.movieImg} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
              </div>
              <h1>{`Title: ${movie.original_title}`}</h1>
              <h3>{ `Overview: ${movie.overview}`}</h3>
              <h3 className={styles.genreList}> Genres: { movie.genres.map(
                (genre, key) => <li key={genre.id}>{genre.name}</li>
              )}
            </h3>
              <h3>{`Vote Average: ${movie.vote_average}`}</h3>

              <hr/>
              <ReviewList
                movieId={ movie.id }
                newReviews={ this.state.newReviews }
              />

            </div>
            :
            <p>loading...</p>
          }

        </div>
      );
    }

  }

  export default MovieShow;
