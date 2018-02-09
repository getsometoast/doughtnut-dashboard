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

  handleSubmitClick = (event) => {
    this.props.handleOnClick(this.state.currentTestData);
  };


  /* DUPLICATION */
  handleTextInput = (event) => {
    const state = this.state;
    state.currentTestData[event.target.name] = event.target.value;
    this.setState(state);
  }

  buildTextField = (name, value, hintText) => {
    return <TextField name={name} value={value} hintText={hintText} onChange={this.handleTextInput} />;
  }
  

  render() {
    const { name, amount, endDate } = this.state.currentTestData;

    return (
      <div className='container'>
        {this.buildTextField('name', name, 'Budget Name')}<br /><br />
        {this.buildTextField('amount', amount, 'Budget Amount')}<br /><br />
        {this.buildTextField('endDate', endDate, 'Date Budget Ends')}<br /><br />
        
        <FlatButton 
          label="Submit"
          onClick={this.handleSubmitClick}
        />
      </div>
    )
  }
}

export default TestDataComponent
