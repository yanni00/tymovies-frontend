
  import React from 'react';

  import axios from 'axios';
  import {
  Route,
  Link,
  HashRouter as Router
  } from 'react-router-dom';
  import Login from './Login';

  import Registration from './Registration';
  import Genres from './Genres';
  import About from './About';
  import Search from './Search';
  import SearchForm from './SearchForm';


  class Home extends React.Component {

    render(){
      return(
        <div>
          <h1>Ty Movies</h1>
          <Router>
            <nav>
              <Link to="/login">Login</Link> | &nbsp;
              <Link to="/registration">Sign Up</Link> | &nbsp;
              <Link to="/genres">Genres</Link> | &nbsp;
              <Link to="/about">About Us</Link> | &nbsp;
            </nav>


            <Route exact path="/home" component={ Home }/>
            <Route path="/" component={ SearchForm }/>

            <Route exact path="/search/:query" component={ Search }/>
            <Route exact path="/login" component={ Login } />
            <Route exact path="/registration" component={ Registration } />
            <Route exact path="/genres" component={ Genres } />
            <Route exact path="/about" component={ About } />
          </Router>

          <img src='https://image.tmdb.org/t/p/w300/z7FCF54Jvzv9Anxyf82QeqFXXOO.jpg'/>
          <img src='https://image.tmdb.org/t/p/w300/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg'/>
          <img src='https://image.tmdb.org/t/p/w300/db32LaOibwEliAmSL2jjDF6oDdj.jpg'/>
          <img src='https://image.tmdb.org/t/p/w300/xxLdm3J8WiPLePIEa1ZfmLcMETT.jpg'/>
          <img src='https://image.tmdb.org/t/p/w300/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg'/>
          <img src='https://image.tmdb.org/t/p/w300/iZf0KyrE25z1sage4SYFLCCrMi9.jpg'/>
          <img src='https://image.tmdb.org/t/p/w300/gbPfvwBqbiHpQkYZQvVwB6MVauV.jpg'/>
          <img src='https://image.tmdb.org/t/p/w300/vsmekQlXbUbjSES2Rt7W2i29NIx.jpg'/>
          <img src='https://image.tmdb.org/t/p/w300/vd6w8M7ixwPHmiVauphyGVjkflA.jpg'/>
          <img src='https://image.tmdb.org/t/p/w300/df8kJTrVImRiWz2G1WiFiVxwBfn.jpg'/>
          <img src='https://image.tmdb.org/t/p/w300/lETNNUshBgoeFbw91fzdulIernh.jpg'/>
          <img src='https://image.tmdb.org/t/p/w300/9hd5th0fvFmAwkVOntWG4cilmSk.jpg'/>

          <footer>
            &copy; tymovies 2020
          </footer>
        </div>
      );
    }
  }

  export default Home;
