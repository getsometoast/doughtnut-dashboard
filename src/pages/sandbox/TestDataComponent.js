import React, { Component } from 'react';
import { TextField, FlatButton } from 'material-ui'

class TestDataComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentTestData: {
        name: 'this',
        amount: 'is a',
        endDate: 'test',
      }
    };

    console.log(props);
    console.log(this.state);
  }

  componentWillMount() {
    console.log("COMPONENT WILL MOUNT...");
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  /*
    this component renders the currentTestData object in the state tree
    it is also responsible for syncing changes made in the form data back to the currentTestData object in the state tree
    it is also responsible for dispatching the create test data action when the submit button is clicked
  */

  handleChange = (event) => {
    console.log(event.target.value);
    
    const state = this.state;
    console.log(state);

    state.currentTestData[event.target.name] = event.target.value;
    this.setState(state);
  };

  handleSubmitClick = (event) => {
    // get the data
    // create the action and pass it the data
    // use the action that is present on the props of the component set up in the container...
    console.log(this.props);
    this.props.handleOnClick(this.state.currentTestData);
  };

  render() {
    const { name, amount, endDate } = this.state.currentTestData;

    return (
      <div className='container'>
        <TextField 
          name='name'
          value={name}
          onChange={this.handleChange}
        />
        <br /><br />
        <TextField 
          name='amount'
          value={amount}
          onChange={this.handleChange}
        />
        <br /><br />
        <TextField 
          name='endDate'
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
