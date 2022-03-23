import React from "react";
import { render } from "react-dom";
import axios from 'axios';
import WordsTable from './components/WordsTable.jsx';
import AddEntries from './components/AddEntries.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    // words will be an array of objects
    this.state = {
      entries: []};
    this.getEntries = this.getEntries.bind(this);
  }

  componentDidMount() {
    this.getEntries();
  }

  getEntries() {
    // make ajax get call
    var thisInGetEntries = this;
    axios.get('/api/get')
      .then(function(data) {
        thisInGetEntries.setState({entries: data.data});
      })
      .catch(function(err) {
        console.log(err);
      })
  }

  render() {

    return (
      <div>
        <h2>An awesome amalgimation of appelations</h2>
        <div><AddEntries getEntries={this.getEntries}/></div>
        <div>
          <WordsTable entries={this.state.entries}/>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById("root"));

export default App;
