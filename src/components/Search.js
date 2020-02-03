import React from 'react';
import axios from 'axios';

const BASE_URL = 'http://www.omdbapi.com/?apikey=2a3ff8e7&';

class Search extends React.Component {

  state = {
    movies: [],
  }

  componentDidMount() {
    console.log('working from the search comp')

    const movieTitle = this.props.match.params.query.toLowerCase();
    // this.setState({ movieTitle: movieTitle})

    // Run our API Call HERE

    // 1) Make the API Call & Save response to the state
    this.makeAPICall( movieTitle );

    // 2) Once response is saved to state, display it in return

  } // end of ComponentDidMount();


  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.match.params.query !== prevProps.match.params.query) {
    // this.fetchData(this.props.userID);
    console.log('there has been a change!!!')
    const movieTitle = this.props.match.params.query.toLowerCase();
    this.makeAPICall( movieTitle )
  }
}

// Make API Call
  makeAPICall = ( title ) => {

    // This is where we make our Axios call

    const movieParams = `http://www.omdbapi.com/?apikey=2a3ff8e7&s=${title}`

    axios.get(movieParams)
    .then( res => {
      console.log('response:', res.data.Search);
      const movieData = res.data.Search;

      if(movieData === undefined){
        console.log('YOU HAVE UNDEFINED MOVIE DATA')
      } else {
        this.setState({ movies: res.data.Search})
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
            this.state.movies.map( movie => (
               <li key={movie.name}>
               {movie.Title} ({movie.Year})
               </li>
            ))
          }
          </ul>
          :
          <p>Cannot find your search</p>
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
