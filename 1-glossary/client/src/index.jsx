import React from "react";
import { render } from "react-dom";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    // words will be an array of objects
    this.state = {words: []};
    this.getWords = this.getWords.bind(this);
  }

  componentDidMount() {
    console.log('did mount invoked');
    this.getWords();
  }

  getWords() {
    console.log('get words invoked');
    // make ajax get call
    var thisInGetWords = this;
    axios.get('/api/get')
    .then(function(data) {
      console.log('axios get res');
      console.log('this in axios .then:::', this);
      console.log('data in axios response:::', data);
      thisInGetWords.setState({words: data.data});
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  render() {
    const glossary = this.state.words.map((words) => {
      return (
        <React.Fragment>
          <li>Word: {words.word}</li>
          <li>Definition: {words.definition}</li>
        </React.Fragment>
      )
    });
    return (
      <div>
        <p>Hello, World! testing a change. still compiling</p>
        <div>
          <ul>{glossary}</ul>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById("root"));
export default App;
