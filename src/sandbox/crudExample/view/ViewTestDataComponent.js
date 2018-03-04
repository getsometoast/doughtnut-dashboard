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

  componentWillReceiveProps(nextProps) {
    this.setState({currentTestData: nextProps.currentTestData});
  }

  handleDelete = (event) => {
    this.props.deleteTestData(this.state.currentTestData.id);
  }

  handleCancel = (event) => {
    this.setState({editing: !this.state.editing});
  }

  buildButton = (label, onClick, primary) => {
    return <RaisedButton label={label} onClick={onClick} primary={primary} />;
  }


  /* DUPLICATION */
  handleTextInput = (event) => {
    const state = this.state;
    state.currentTestData[event.target.name] = event.target.value;
    this.setState(state);
  }


  buildTextField = (name, value, hintText=undefined) => {
    return <TextField name={name} value={value} hintText={hintText} onChange={this.handleTextInput} />;
  }

  render() {
    const { name, amount, endDate } = this.state.currentTestData;

    let nameLabel = this.state.editing ? this.buildTextField('name', name) : name;
    let amountLabel = this.state.editing ? this.buildTextField('amount', amount) : amount;
    let endDateLabel = this.state.editing ? this.buildTextField('endDate', endDate) : endDate;
    let buttonLabel = this.state.editing ? 'Save' : 'Edit';

    let deleteButton = this.state.editing ? null : this.buildButton('Delete', this.handleDelete, false);
    let cancelButton = !this.state.editing ? null : this.buildButton('Cancel', this.handleCancel, false);
    let editButton = this.buildButton(buttonLabel, this.toggleEdit, true);

    return (
      <div className='container'>
        <h3>NAME: {nameLabel}</h3>
        <h3>AMOUNT: {amountLabel}</h3>
        <h3>END DATE: {endDateLabel}</h3>
        <br /><br />
        {editButton}
        {deleteButton}
        {cancelButton}
      </div>
    )
  }
}

export default ViewTestDataComponent
