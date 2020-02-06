  import axios from 'axios';
  import React from 'react';
  import styles from './SearchForm.module.css';

  class SearchForm extends React.Component {

    state = {
      searchText: ''
    };

    handleInput = (event) => {
      this.setState({searchText: event.target.value});
    }

    handleSubmit = () => {
      const route =`/search/${ this.state.searchText }`;
      this.props.history.push( route );
    }




    render(){
      return (
        <div>

        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInput}/>
          <input type="submit" value="Search Movies" />
        </form>


      </div>
      );
    }
  };


  export default SearchForm;
