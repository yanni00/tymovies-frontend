
  import React from 'react';

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
          <input type="text" onChange={this.handleInput}/>
          <button onClick={ this.handleSubmit }>Search Movies</button>

      </div>
      );
    }
  };


  export default SearchForm;
