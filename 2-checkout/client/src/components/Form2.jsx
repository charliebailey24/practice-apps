import React from "react";
import App from "../index.jsx";

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    }
    this.handleAddressSubmit = this.handleAddressSubmit.bind(this);

    this.handleLine1Change = this.handleLine1Change.bind(this);
    this.handleLine2Change = this.handleLine2Change.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  /*-------------click handlers--------------*/
  handleAddressSubmit(event) {
    event.preventDefault();
    this.props.setPage('Form3');
  }

  /*-------------change handlers-------------*/
  handleLine1Change(event) {
    this.setState({line1: event.target.value});
  }

  handleLine2Change(event) {
    this.setState({line2: event.target.value});
  }

  handleCityChange(event) {
    this.setState({city: this.target.value});
  }

  handleStateChange(event) {
    this.setState({state: this.target.value});
  }

  handleZipChange(event) {
    this.setState({zip: this.target.value});
  }

  handlePhoneChange(event) {
    this.setState({phone: this.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleAddressSubmit}>
        <label>
          Address Line 1:
          <input type="text" value={this.state.line1} onChange={this.handleLine1Change}/>
        </label>
        <label>
          Address Line 2:
          <input type="text" value={this.state.line2} onChange={this.handleLine2Change}/>
        </label>
        <label>
          City:
          <input type="text" value={this.state.city} onChange={this.handleCityChange}/>
        </label>
        <label>
          State:
          <input type="text" value={this.state.state} onChange={this.handleStateChange}/>
        </label>
        <label>
          Zip Code:
          <input type="text" value={this.state.zip} onChange={this.handleZipChange}/>
        </label>
        <label>
          Phone Number:
          <input type="text" value={this.state.phone} onChange={this.handlePhoneChange}/>
        </label>
        <input type="submit" value="Next" />
      </form>
    )
  }
}

export default Form2;