import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&';

class Search extends React.Component {

  state = {
    movies: [],
  }

  componentDidMount() {
    // console.log('working from the search comp')

    const movieTitle = this.props.match.params.query.toLowerCase();
    // this.setState({ movieTitle: movieTitle})

    // Run our API Call HERE

    // 1) Make the API Call & Save response to the state
    this.makeAPICall( movieTitle );

    // 2) Once response is saved to state, display it in return

  } // end of ComponentDidMount();


  componentDidUpdate(prevProps) {

  if (this.props.match.params.query !== prevProps.match.params.query) {

    // console.log('there has been a change!!!')
    const movieTitle = this.props.match.params.query.toLowerCase();
    this.makeAPICall( movieTitle )
  }
}

// Make API Call
  makeAPICall = ( title ) => {

    // This is where we make our Axios call

    const movieParams = `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${title}`


    axios.get(movieParams)
    .then( res => {
      console.log('response:', res.data.results);
      const movieData = res.data.results;

      if(movieData === undefined){
        console.log('YOU HAVE UNDEFINED MOVIE DATA')
      } else {
        this.setState({ movies: res.data.results})
      }

    })
    .catch( err => {
      console.warn( err );
      console.log( 'nupppppp wrong!')
    });
  }



  render(){

    return (
      <div>
        <h3>Movie Results for {this.props.match.params.query}</h3>

        {
          this.state.movies.length >= 1
          ?

          <ul>
          {
            this.state.movies.map( movie =>   (
               <li key={movie.name}>
               {movie.title} ({movie.release_date})
               <br/>
               <br/>
               <Link to={`/movies/${movie.id}`}>
                 <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
               </Link>
               </li>

            ))
          }
          </ul>
          :
          <p>Loading...Please wait</p>
        }



      </div>
    );
  } //render
} // class

export default Search;


// Tony's previous code

//
// const searchTerm = this.props.match.params.query.toLowerCase();
//
// const results = this.state.Movies.filter(proc => {
//
//
//   return proc.name.toLowerCase().includes( searchTerm );
// });

// <ul>
// {
//   results.map( r => (
//      <li key={r.name}>
//      {r.name} ({r.rating})
//      </li>
//   ))
// }
// </ul>
