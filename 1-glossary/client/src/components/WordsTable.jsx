import React from 'react';
import App from '../index.jsx';
import WordsTableEntry from './WordsTableEntry.jsx';

function WordsTable(props) {

  const glossary = props.entries.map((entry) => {
    return (
      <WordsTableEntry entry={entry}/>
    )
  });

  return (
    <div>{glossary}</div>
  )
}

export default WordsTable;