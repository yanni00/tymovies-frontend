import React from 'react';

class Search extends React.Component {

  state = {
    Movies: [
      {
        name: 'Superman',
        type: 'Action',
        rating: '7/10'
      },
      {
        name: 'Iron Man',
        type: 'Adventure',
        rating: '8/10'
      },
      {
        name: 'Batman',
        type: 'Sci-Fi',
        rating: '8.5/10'
      },
    ]
  };



  render(){

    const searchTerm = this.props.match.params.query.toLowerCase();

    const results = this.state.Movies.filter(proc => {


      return proc.name.toLowerCase().includes( searchTerm );
    });


    return (
      <div>
        <h3>Movie Results for {this.props.match.params.query}</h3>
        <ul>
        {
          results.map( r => (
             <li key={r.name}>
             {r.name} ({r.rating})
             </li>
          ))
        }
        </ul>
      </div>
    );
  } //render
} // class

export default Search;
