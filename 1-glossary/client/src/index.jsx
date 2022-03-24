import React from "react";
import { render } from "react-dom";
import axios from 'axios';
import WordsTable from './components/WordsTable.jsx';
import AddEntries from './components/AddEntries.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    // entries will be an array of objects
    this.state = {
      entries: []
    };
    this.getEntries = this.getEntries.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    this.getEntries();
  }

  getEntries() {
    var thisInGetEntries = this;
    axios.get('/api/get')
      .then(function(data) {
        thisInGetEntries.setState({entries: data.data});
      })
      .catch(function(err) {
        console.log(err);
      })
  }

  onSearch(term) {
    term = term.toLowerCase();

    var foundEntries = this.state.entries.filter((entry) => {
      var wordMatch = entry.word.toLowerCase().includes(term);
      var definitionMatch = entry.definition.toLowerCase().includes(term);

      if (wordMatch || definitionMatch) {
        return entry;
      }
    });
    this.setState({entries: foundEntries});
  }

  render() {

    return (
      <div>
        <h2>An awesome glossary</h2>
        <div><AddEntries updateEntry={this.updateEntry} getEntries={this.getEntries}/>
        </div>
        <div>
          <Search onSearch={this.onSearch}/>
        </div>
        <div>
          <WordsTable updateEntry={this.updateEntry} entries={this.state.entries}/>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById("root"));

export default App;
