
  import axios from 'axios';
  import React from 'react';
  import styles from './About.module.css'

  class About extends React.Component {

    state = {
      searchText: ''
    };



    render(){
      return(
        <div>
          <p className={styles.text}>
            This is a full stack group project with a team of two who are Tony and Yanni with a set amount of time frame about a week. <br/><br/>
            This website uses The Movie Database API. <br/><br/>
            It has similar concept as IMDB.<br/><br/>
            Any users are allowed to search for movies. <br/><br/>
            Users can sign up for accounts.<br/><br/>
            Users with accounts can give reviews to any movies as well as comment on other users' reviews. <br/><br/>
            Technologies used:
            <ul>
              <li>React</li>
              <li>Ruby on Rails</li>
              <li>CSS modules</li>

            </ul>

          </p>
        </div>
      );
    }
  }





  export default About;
