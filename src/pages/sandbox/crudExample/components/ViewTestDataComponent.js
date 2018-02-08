import React, { Component } from 'react';
import { TextField, FlatButton } from 'material-ui'

class ViewTestDataComponent extends Component {

  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      currentTestData: {
        id: this.props.currentTestData.id,
        name: this.props.currentTestData.name,
        amount: this.props.currentTestData.amount,
        endDate: this.props.currentTestData.endDate,
      },
      editing: false,
    }
    console.log(this.state);
  }

  componentWillMount() {
    console.log("COMPONENT WILL MOUNT...");
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  componentWillUnmount() {
    console.log('unmounting');
  }

// todo - need to understand the difference function definitions make to "this" keyword...
  handleClick = (event) => {
    if (this.state.editing) {
      console.log('DISPATCH SAVE ACTION'); // dispatch the save action
      this.props.handleOnClick(this.state.currentTestData);
    }
    this.setState({editing: !this.state.editing});
  }

  handleTextInput = (event) => {
    const state = this.state;
    state.currentTestData[event.target.name] = event.target.value;
    this.setState(state);
  }

// use conditional rednering to flip between viewing and editing
// need an action to change the flag editing = true / false
// need and action to persist the data on save when finished editing

  render() {
    const { name, amount, endDate } = this.state.currentTestData;

    let nameLabel = this.state.editing ? <TextField name='name' value={name} onChange={this.handleTextInput} /> : name;
    let amountLabel = this.state.editing ? <TextField name='amount' value={amount} onChange={this.handleTextInput} /> : amount;
    let endDateLabel = this.state.editing ? <TextField name='endDate' value={endDate} onChange={this.handleTextInput} /> : endDate;
    let buttonLabel = this.state.editing ? 'Save' : 'Edit';

    return (
      <div className='container'>
        
        <h3>NAME: {nameLabel}</h3>
        <h3>AMOUNT: {amountLabel}</h3>
        <h3>END DATE: {endDateLabel}</h3>
        <br /><br />
        <FlatButton 
          label={buttonLabel}
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

export default ViewTestDataComponent
