import React, { Component } from 'react';
import { TextField, FlatButton } from 'material-ui'

class TestDataComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTestData: {
        name: '',
        amount: '',
        endDate: '',
      }
    };
  }

  handleChange = (event) => {
    const state = this.state;
    state.currentTestData[event.target.name] = event.target.value;
    this.setState(state);
  };

  handleSubmitClick = (event) => {
    this.props.handleOnClick(this.state.currentTestData);
  };

  render() {
    const { name, amount, endDate } = this.state.currentTestData;

    return (
      <div className='container'>
        <TextField 
          name='name'
          hintText='Budget Name'
          value={name}
          onChange={this.handleChange}
        />
        <br /><br />
        <TextField 
          name='amount'
          hintText='Budget Amount'
          value={amount}
          onChange={this.handleChange}
        />
        <br /><br />
        <TextField 
          name='endDate'
          hintText='Date Budget Ends'
          value={endDate}
          onChange={this.handleChange}
        />
        <br /><br />
        <FlatButton 
          label="Submit"
          onClick={this.handleSubmitClick}
        />
      </div>
    )
  }
}

export default TestDataComponent
