import React from 'react';
import App from '../index.jsx';
import axios from 'axios';

class AddEntries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    }

    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addEntries = this.addEntries.bind(this);
  }

  handleWordChange(event) {
    this.setState({word: event.target.value});
  }

  handleDefinitionChange(event) {
    this.setState({definition: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addEntries();
  }

  addEntries() {
    var thisInAddEntries = this;
    axios.post('/api/post', {
      word: thisInAddEntries.state.word,
      definition: thisInAddEntries.state.definition
    })
    .then(function(response) {
      thisInAddEntries.props.getEntries();
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add appelations:</label>
          <input type="text" value={this.state.word} onChange={this.handleWordChange} />
        <label>Add annotation:</label>
          <input type="text" value={this.state.definition} onChange={this.handleDefinitionChange}/>
        <input type="submit" value="Add"/>
      </form>
    )


  }
}

export default AddEntries;