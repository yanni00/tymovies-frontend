import React, {Component} from 'react';
import axios from 'axios';
import styles from './Login.module.css';

const URL_USER = 'http://localhost:3000/api/user_token/' // 'http://10.1.4.76/sessions.json';

class Login extends Component {

  state = {
    email: '',
    password: '',
    logged_in: false
  };

  handleEmail = event => {
    this.setState({ email: event.target.value });
  }

  handlePassword = event => {
    this.setState({ password: event.target.value });
  }

  login = (userEmail, pwd) => {
    console.log({auth:{
      email: userEmail,
      password: pwd
    }});
    axios.post(URL_USER, {auth:{
      email: userEmail,
      password: pwd
    }})
    .then( res => {
      console.log(res);
      if (res.data.jwt) {
        this.setState({ logged_in: true });
        localStorage.setItem('auth_token', res.data.jwt);

        // tell the Home component we logged in - so it can update the nav bar
        this.props.onLogin(true);

        this.props.history.push('/TrendingMovies/TrendingMovies');
      } else {
        console.warn("Login error!", res);
      }


    })
    .catch( err => console.warn(err));

    if (this.state.logged_in) {
      this.props.history.push('/TrendingMovies/TrendingMovies');
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.login(this.state.email, this.state.password);
  }

  render() {
    return(
      <div className={styles.loginBoxBorder}>
        <form onSubmit={this.handleSubmit}>
          <label>
            <br></br>
            Email:
            <br></br>
            <input type="text" onChange={this.handleEmail} />
          </label>
          <br></br>
          <label>
            <br></br>
            Password:
            <br></br>
            <input type="password" onChange={this.handlePassword}  />
            <br></br>
          </label>
          <br></br>
        <input type="submit" value="Login"/>
        </form>
      </div>
    );
  }
}

export default Login;
