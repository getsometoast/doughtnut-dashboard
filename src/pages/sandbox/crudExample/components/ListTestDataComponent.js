import React, { Component } from 'react';
import { FlatButton, Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

class ListTestDataComponent extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("COMPONENT WILL MOUNT...");
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  handleOnClick = (event) => {
    this.props.history.push('/sandbox/crudExample/new');
  }

  handleRowClick = (rowId) => {
    console.log(rowId);
    console.log(this.props.testDataItems[rowId]);
    // TODO - need to load the current test data object as the one in the ID I pass to the page....
    // might need to dispatch an action that requests the view page with the correct id or something?
    this.props.history.push(`/sandbox/crudExample/view/${this.props.testDataItems[rowId].id}`);
  }

  render() {
    const testDataItems = this.props.testDataItems.map(item => 
      <TableRow key={item.id}>
        <TableRowColumn>{item.name}</TableRowColumn>
        <TableRowColumn>${item.amount}</TableRowColumn>
        <TableRowColumn>{item.endDate}</TableRowColumn>
      </TableRow>
    )

    return (
      <div className='container'>
        <FlatButton label='New' onClick={this.handleOnClick} />
        <Table onCellClick={this.handleRowClick} selectable={false}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Amount</TableHeaderColumn>
              <TableHeaderColumn>End Date</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>

            {testDataItems}

          </TableBody>
        </Table>
      </div>
    )
  }
}

export default  withRouter(ListTestDataComponent)
