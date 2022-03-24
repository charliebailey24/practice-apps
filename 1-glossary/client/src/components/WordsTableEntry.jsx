import React from 'react';
import WordsTable from './WordsTable.jsx';

class WordsTableEntry extends React.Component {
  constructor(props) {
    super(props);

    this.handleEditDelete = this.handleEditDelete.bind(this);
  }

  handleEditDelete(event) {
    event.preventDefault();
    console.log('props for this component:::', this.props.entry);
  }

  render() {
    // if true
      // return with input tag
    //
    return (
      <div>
        <div>
          <h4>{this.props.entry.word}</h4>
          <form onSubmit={this.handleEditDelete}>
            <input type="submit" value="edit/delete"/>
          </form>
        </div>
          <p>{this.props.entry.definition}</p>
      </div>
    )
  }
}

export default WordsTableEntry;