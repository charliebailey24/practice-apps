import React from "react";
import App from "../index.jsx";

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.handleAccountSubmit = this.handleAccountSubmit.bind(this);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  /*-------------click handlers--------------*/
  handleAccountSubmit(event) {
    event.preventDefault();
    this.props.setPage('Form2');
  }

  /*-------------change handlers-------------*/
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <div>
        <h4>Please enter account details:</h4>
        <form onSubmit={this.handleAccountSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
          </label>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleEmailChange}/>
          </label>
            Password:
          <label>
            <input type="text" value={this.state.password} onChange={this.handlePasswordChange}/>
          </label>
          <div>
            <input type="Submit" value="Create Account" />
          </div>
        </form>
      </div>
    )
  }
}

export default Form1;