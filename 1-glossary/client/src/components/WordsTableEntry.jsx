import React from 'react';
import WordsTable from './WordsTable.jsx';

function WordsTableEntry(props) {
  return (
    <div>
      <div>
        <h4>{props.entry.word}</h4>
        <button>edit/delete</button>
      </div>
        <p>{props.entry.definition}</p>
    </div>
  )
}

export default WordsTableEntry;

{/* <React.Fragment>
<li>Word: {words.word}</li>
<li>Definition: {words.definition}</li>
</React.Fragment> */}