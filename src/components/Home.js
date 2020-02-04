
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


          <footer>
            &copy; tymovies 2020
          </footer>
        </div>
      );
    }
  }

  export default Home;
