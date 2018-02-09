import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui'

class ViewTestDataComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentTestData: this.props.currentTestData,
      editing: false,
    };
  }

  toggleEdit = (event) => {
    if (this.state.editing) {
      this.props.updateTestData(this.state.currentTestData);
    }
    this.setState({editing: !this.state.editing});
  }

  handleDelete = (event) => {
    this.props.deleteTestData(this.state.currentTestData.id);
  }

  handleTextInput = (event) => {
    const state = this.state;
    state.currentTestData[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleCancel = (event) => {
    this.setState({editing: !this.state.editing});
  }

  render() {
    const { name, amount, endDate } = this.state.currentTestData;

    let nameLabel = this.state.editing ? <TextField name='name' value={name} onChange={this.handleTextInput} /> : name;
    let amountLabel = this.state.editing ? <TextField name='amount' value={amount} onChange={this.handleTextInput} /> : amount;
    let endDateLabel = this.state.editing ? <TextField name='endDate' value={endDate} onChange={this.handleTextInput} /> : endDate;
    let buttonLabel = this.state.editing ? 'Save' : 'Edit';

    let deleteButton = this.state.editing ? null : 
        <RaisedButton 
          marginleft='100px'
          label='Delete'
          onClick={this.handleDelete}
        />;

    let cancelButton = !this.state.editing ? null :
        <RaisedButton 
          marginleft='100px'
          label='Cancel'
          onClick={this.handleCancel}
        />

    return (
      <div className='container'>
        <h3>NAME: {nameLabel}</h3>
        <h3>AMOUNT: {amountLabel}</h3>
        <h3>END DATE: {endDateLabel}</h3>
        <br /><br />
        <RaisedButton 
          label={buttonLabel}
          onClick={this.toggleEdit}
          primary={true}
        />
        {deleteButton}
        {cancelButton}
      </div>
    )
  }
}

export default ViewTestDataComponent
