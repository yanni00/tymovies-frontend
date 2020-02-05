
  import React, {Component} from 'react';
  import styles from './Registration.module.css';

  class Registration extends Component {
    constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      comfirmed_password: ''
    }
  }

  handleName = event => {
    this.setState({name:event.target.value});
  }

  handlePwd = event => {
    this.setState({password:event.target.value});
  }

  handlePwdConfirmation = event => {
    this.setState({comfirmed_password: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const route = '/login';
    this.props.history.push(route);
  }

  render() {
    return(
    <div className={styles.createAccountBoxBorder}>
      <form onSubmit = {this.handleSubmit}>
        <br></br>
        <input type="text" placeholder="User Name" onChange={this.handleName}/> <br/>
        <input type="text" placeholder="Password" onChange={this.handlePwd}/> <br/>
        <input type="text" placeholder="Comfirmed Password" onChange={this.handlePwdConfirmation}/> <br/>
        <br></br>
        <input type="submit" value="Sign Up"/>

      </form>
    </div>
    );
  }
}

export default Registration;
