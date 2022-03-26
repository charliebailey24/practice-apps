import React from "react";
import { render } from "react-dom";
import axios from "axios";
import Form1 from "./components/Form1.jsx";
import Form2 from "./components/Form2.jsx";
import Form3 from "./components/Form3.jsx";
import Confirm from './components/Confirm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      session_id: '',
      hasCompleteCheckout: 'false'
    }

    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  componentDidMount() {
    this.setState({session_id: JSON.stringify(document.cookie, undefined, "\t")});
  }

  handleCheckoutClick(event) {
    event.preventDefault();
    this.setState({page: 'Form1'});
  }

  setPage(view) {
    this.setState({page: view});
  }

  render() {
    if (this.state.page === 'home') {

      return (
        <div>
          <p>Hello, World!</p>
          <p>
            <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
          </p>
          <form onSubmit={this.handleCheckoutClick}>
            <input type="Submit" value="Checkout" />
          </form>
        </div>
      // document.getElementById("root")
      //s_id=dd9749c5-a893-4c38-9879-2c5898b4bbe3
        // store and check against in the backend
      );

    } else if (this.state.page === 'Form1') {

      return(<Form1 setPage={this.setPage} />);

    } else if (this.state.page === 'Form2') {

      return(<Form2 setPage={this.setPage} />);

    } else if (this.state.page === 'Form3') {

      return(<Form3 setPage={this.setPage} />);

    } else if (this.state.page === 'confirm') {

      return(<Confirm setPage={this.setPage} />);

    }
  }
}

render(<App />, document.getElementById("root"));

export default App;
