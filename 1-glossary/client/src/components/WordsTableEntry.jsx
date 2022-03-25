import React from 'react';
import WordsTable from './WordsTable.jsx';
import axios from 'axios';

class WordsTableEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editEnabled: false,
      // _id: '',
      // word: '',
      // definition: ''
      _id: this.props.entry._id,
      word: this.props.entry.word,
      definition: this.props.entry.definition
    }

    this.handleEditDeleteSave = this.handleEditDeleteSave.bind(this);
    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    this.editDeleteClicked = this.editDeleteClicked.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     _id: this.props.entry._id,
  //     word: this.props.entry.word,
  //     definition: this.props.entry.definition
  //   });
  // }

  editDeleteClicked(event) {
    event.preventDefault();
    this.setState({editEnabled: true});
  }

  handleEditDeleteSave(event) {
    event.preventDefault();
    this.setState({editEnabled: false});
    if (this.state.word.length === 0 || this.state.definition.length === 0) {
      this.deleteEntry();
    } else if (this.state.word !== this.props.entry.word
      || this.state.definition !== this.props.entry.definition) {
        this.updateEntry();
    }
  }

  handleWordChange(event) {
    this.setState({word: event.target.value});
  }

  handleDefinitionChange(event) {
    this.setState({definition: event.target.value});
  }

  deleteEntry() {
    var thisInDeleteEntry = this;
    axios.delete('/api/delete', {
      data: { _id: thisInDeleteEntry.state._id }
    })
    .then(function(response) {
      console.log(response);
      thisInDeleteEntry.props.getEntries();
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  updateEntry() {
    var thisInUpdateEntry = this;
    axios.patch('/api/patch', {
      data: {
        _id: thisInUpdateEntry.state._id,
        word: thisInUpdateEntry.state.word,
        definition: thisInUpdateEntry.state.definition
      }
    })
    .then(function(reponse) {
      console.log(reponse);
      thisInUpdateEntry.props.getEntries();
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  render() {
    // this.setState({_id: this.props._id, word: this.props.word, definition: this.props.definition});

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
            <h4>{this.props.entry.word}</h4>
            <form onSubmit={this.editDeleteClicked}>
              <input type="submit" value="edit/delete"/>
            </form>
          </div>
            <p>{this.props.entry.definition}</p>
        </div>
      )
    }
  }
}

export default WordsTableEntry;