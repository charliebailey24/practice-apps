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

    this.handleInputChange = this.handleInputChange.bind(this);

    // this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  /*-------------click handlers--------------*/
  handleAccountSubmit(event) {
    event.preventDefault();
    this.props.saveForm('form2', 'form1', this.state);
  }

  /*-------------change handlers-------------*/
  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  // handleNameChange(event) {
  //   console.log(event);
  //   this.setState({name: event.target.value});
  // }

  // handleEmailChange(event) {
  //   this.setState({[event.target.name]: event.target.value});
  // }

  // handlePasswordChange(event) {
  //   this.setState({password: event.target.value})
  // }

  render() {
    return (
      <div>
        <h4>Please enter account details:</h4>
        <form onSubmit={this.handleAccountSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}/>
          </label>
          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}/>
          </label>
            Password:
          <label>
            <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange}/>
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