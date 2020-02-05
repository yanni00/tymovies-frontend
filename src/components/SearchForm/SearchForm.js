
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

        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInput}/>
          <input type="submit" value="Search Movies" />
        </form>


      </div>
      );
    }
  };


  export default SearchForm;
