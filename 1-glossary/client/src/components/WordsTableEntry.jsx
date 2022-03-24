import React from 'react';
import WordsTable from './WordsTable.jsx';

class WordsTableEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editEnabled: false,
      // updatedWord: null,
      // updatedDefinition: null
      _id: this.props.entry._id,
      word: this.props.entry.word,
      definition: this.props.entry.definition
    }

    this.handleEditDeleteSave = this.handleEditDeleteSave.bind(this);
    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    this.editDeleteClicked = this.editDeleteClicked.bind(this);
  }

  editDeleteClicked(event) {
    event.preventDefault();
    this.setState({editEnabled: true});
  }

  handleEditDeleteSave(event) {
    event.preventDefault();
    this.setState({editEnabled: false});
    console.log('updatedWord in state:::', this.state.word);
    console.log('updatedDefinition in state:::', this.state.definition);
  }

  handleWordChange(event) {
    this.setState({word: event.target.value});
  }

  handleDefinitionChange(event) {
    this.setState({definition: event.target.value});
  }

  render() {

    if (this.state.editEnabled) {
      return (
        <form onSubmit={this.handleEditDeleteSave}>
          <label>
            Edit:
            <input type="text" value={this.state.word} onChange={this.handleWordChange}/>
          </label>
          <label>
            Edit:
            <textarea type="text" value={this.state.definition} onChange={this.handleDefinitionChange} />
          </label>
          <input type="submit" value="Save"/>
        </form>
      )
    } else {
      return (
        <div>
          <div>
            <h4>{this.state.word}</h4>
            <form onSubmit={this.editDeleteClicked}>
              <input type="submit" value="edit/delete"/>
            </form>
          </div>
            <p>{this.state.definition}</p>
        </div>
      )
    }
  }
}

export default WordsTableEntry;