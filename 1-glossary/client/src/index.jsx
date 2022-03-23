import React from "react";
import { render } from "react-dom";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    // words will be an array of objects
    this.state = {words: []};
    this.getWords = this.getWords.bind(this);
    this.addWords = this.addWords.bind(this);
  }

  componentDidMount() {
    console.log('did mount invoked');
    this.getWords();
  }

  getWords() {
    console.log('get words invoked');
    // make ajax get call
    axios.get('/api/get')
    .then(function(response) {
      console.log('axios get res');
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  addWords() {
    // set state to words returned from server
  }

  render() {
    return (
      <div>
        <p>Hello, World! testing a change. still compiling</p>
        <div></div>
      </div>
    )
  }
}

render(<App />, document.getElementById("root"));
