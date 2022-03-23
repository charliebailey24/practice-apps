import React from 'react';
import App from '../index.jsx';

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
  }

  handleWordChange(event) {
    console.log('this.state.word:::', this.state.word);
    this.setState({word: event.target.value});
  }

  handleDefinitionChange(event) {
    console.log('this.state.definition:::', this.state.definition);
    this.setState({definition: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handle submit is triggering');
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