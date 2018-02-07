import React, { Component } from 'react';
import { FlatButton } from 'material-ui'

class ViewTestDataComponent extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    console.log("COMPONENT WILL MOUNT...");
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    const { name, amount, endDate } = this.props.currentTestData;

    return (
      <div className='container'>
        <h3>NAME: {name}</h3>
        <h3>AMOUNT: {amount}</h3>
        <h3>END DATE: {endDate}</h3>
        <br /><br />
        <FlatButton 
          label='Edit'
        />
      </div>
    )
  }
}

export default ViewTestDataComponent
