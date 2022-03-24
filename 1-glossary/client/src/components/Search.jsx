import React from 'react';
import App from '../index.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({term: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input type="text" value={this.state.term} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Search"/>
      </form>
    )
  }

}

export default Search;