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
    axios.post(URL_USER, {auth:{
      email: userEmail,
      password: pwd
    }})
    .then( res => {
      console.log(res);
      this.setState({ logged_in: true })
    })
    .catch( err => console.warn(err));

    if (this.state.logged_in) {
      this.props.history.push('/');
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.login(this.state.email, this.state.password);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" onChange={this.handleEmail} />
        </label>
        <label>
          Password:
          <input type="password" onChange={this.handlePassword} />
        </label>
        <input type="submit" value="Login"/>
      </form>
    );
  }
}

export default Login;
