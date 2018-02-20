import React, { Component } from 'react';
import { RaisedButton, Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

class ListTestDataComponent extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.loadTestData();
  }

  handleOnClick = (event) => {
    this.props.history.push('/sandbox/crudExample/new');
  }

  handleRowClick = (rowId) => {
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
        <RaisedButton label='New' onClick={this.handleOnClick} />
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
