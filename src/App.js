
  import React from 'react';

  import './App.css';
  import axios from 'axios';
  import {
  Route,
  Link,
  HashRouter as Router
  } from 'react-router-dom';
  import Login from './components/Login';
  import Home from './components/Home';
  import Registration from './components/Registration';
  import Genres from './components/Genres';
  import About      from './components/About';
  import Search     from './components/Search';
  import SearchForm from './components/SearchForm';


  class App extends React.Component {



    render(){
      return(
        <div>
          <h1>Ty Movies</h1>
          <Router>
            <nav>
              <Link to="/">Home</Link> | &nbsp;
              <Link to="/login">Login</Link> | &nbsp;
              <Link to="/registration">Sign Up</Link> | &nbsp;
              <Link to="/genres">Genres</Link> | &nbsp;
              <Link to="/about">About Us</Link> | &nbsp;
            </nav>



            <Route exact path="/" component={ Home }/>
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


  export default App;
