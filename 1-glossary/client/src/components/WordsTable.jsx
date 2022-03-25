import React from 'react';
import App from '../index.jsx';
import WordsTableEntry from './WordsTableEntry.jsx';

function WordsTable(props) {

  const glossary = props.entries.map((entry) => {
    console.log('entry._id:::', entry._id);
    return (
      <WordsTableEntry getEntries={props.getEntries} entry={entry} key={entry._id}/>
    )
  });

  return (
    <div>{glossary}</div>
  )
}

export default WordsTable;