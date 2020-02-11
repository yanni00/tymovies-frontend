  import React from 'react';
  import axios from 'axios';
  import {
  Route,
  Link,
  BrowserRouter as Router
  } from 'react-router-dom';
  import Login from '../Login/Login';

  // import Review from '../Review/Review'
  import Registration from '../Registration/Registration';
  import Genres from '../Genres/Genres';
  import GenreShow from '../GenreShow/GenreShow';
  import About from '../About/About';
  import Search from '../Search/Search';
  import SearchForm from '../SearchForm/SearchForm';
  import MovieShow from '../MovieShow/MovieShow';
  import TrendingMovies from '../TrendingMovies/TrendingMovies';
  import ReviewList from '../ReviewList/ReviewList';
  import ReviewForm from '../ReviewForm/ReviewForm';

  import styles from './Home.module.css';


  class Home extends React.Component {

    state = {
      loggedIn: false

    };

    componentDidMount(){
      const token = localStorage.getItem('auth_token');
      if(token){
        this.setState({ loggedIn: true });
      }
    }

    setLoginStatus = (loggedIn) => {
      console.log('hi!', loggedIn);
      this.setState({ loggedIn: loggedIn });
    }

    handleLogout = () => {
      this.setState({ loggedIn: false });
      localStorage.removeItem('auth_token');

    }
    render(){

      return(
        <div >
          <h1 className={styles.header}>Ty Movies</h1>
          <Router>
            <nav className={styles.nav}>

                {
                  this.state.loggedIn
                  ?
                  <a className={styles.login} onClick={this.handleLogout}>Logout</a>
                  :
                  <Link className={styles.login}to="/login">Login</Link>
                }
                |
              <Link className={styles.signUp}to="/registration">Sign Up</Link> |
              <Link className={styles.home} to="/">Home</Link> |
              <Link className={styles.genres}to="/genres">Genres</Link> |
              <Link className={styles.about}to="/about">About Us</Link> |
            </nav>

            <Route path="/" component={ SearchForm }/>
            <Route exact path="/search/:query" component={ Search }/>
            <Route exact path="/movies/:id" component={ MovieShow }/>
            <Route exact path="/login" render={(props) => <Login {...props} onLogin={this.setLoginStatus} /> } />
            <Route exact path="/registration" component={ Registration } />
            <Route exact path="/genres" component={ Genres } />
            <Route exact path="/genres/:id/:name" component={ GenreShow } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/" component={ TrendingMovies }/>

          </Router>
          <br/>
          <br/>

          <footer>

            &copy; tymovies 2020
          </footer>
        </div>
      );
    }
  }

  export default Home;
