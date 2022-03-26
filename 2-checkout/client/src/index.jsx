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
      hasCompleteCheckout: 'false',
      form1: {},
      form2: {},
      form3: {}
    }

    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    this.saveForm = this.saveForm.bind(this);
    // this.saveForm2 = this.saveForm2.bind(this);
  }

  componentDidMount() {
    this.setState({session_id: JSON.stringify(document.cookie, undefined, "\t")});
  }

  handleCheckoutClick(event) {
    event.preventDefault();
    this.setState({page: 'form1'});
  }

  saveForm(nextView, form, savedState) {
    console.log('nextView:::', nextView);
    console.log('form:::', form);
    console.log('savedState:::', savedState);
    this.setState({page: nextView, [form]: savedState});
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

    } else if (this.state.page === 'form1') {

      return(<Form1 saveForm={this.saveForm} />);

    } else if (this.state.page === 'form2') {

      return(<Form2 saveForm={this.saveForm} />);

    } else if (this.state.page === 'form3') {

      return(<Form3 saveForm={this.saveForm} />);

    } else if (this.state.page === 'confirm') {

      return(<Confirm saveForm={this.saveForm} />);

    }
  }
}

render(<App />, document.getElementById("root"));

export default App;
