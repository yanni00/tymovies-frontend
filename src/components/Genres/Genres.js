  import axios from 'axios';
  import React from 'react';
  import axios from 'axios';
  import { Link } from 'react-router-dom';
  import styles from './Genres.module.css';


  class Genres extends React.Component {

    state = {
      genres: [],
    };

    componentDidMount(){
      const URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=24d863d54c86392e6e1df55b9a328755';
      axios.get(URL)
      .then( res => {
        console.log('response:', res.data.genres);
        this.setState({genres: res.data.genres})
      })
      .catch( err => {
        console.warn( err );
      });
    }

    render(){
      return(
        <div>

          {
            this.state.genres.length >= 1
            ?
            <ul>
              {

                this.state.genres.map( genre => (
                <li>
                  <Link to={`/genres/${genre.id}/${genre.name}`} key={genre.id}>
                  {genre.name}

                  </Link>
                </li>
                ))
              }
            </ul>
            :
            <p>loading...</p>
          }
        </div>
      );
    }
  }

  export default Genres;
