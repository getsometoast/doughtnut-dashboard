import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import { RaisedButton } from 'material-ui'

class DailyExpenses extends Component {

  constructor(props) {
    super(props);

    const tableData = [
      	{name: 'Groceries', frequency: 'Monthly', 'amount': 1000},
      	{name: 'Rent', frequency: 'Monthly', 'amount': 5000},
      	{name: 'Internet', frequency: 'Monthly', 'amount': 100},
      	{name: 'Gym', frequency: 'Monthly', 'amount': 200},
      	{name: 'Phone', frequency: 'Monthly', 'amount': 100},
      	{name: 'Cable', frequency: 'Monthly', 'amount': 100},
      	{name: 'Netflix', frequency: 'Monthly', 'amount': 10},
      	{name: 'Spotify', frequency: 'Monthly', 'amount': 10},
      	{name: 'Pharmacy', frequency: 'Monthly', 'amount': 500},
      	{name: 'Clothes', frequency: 'Monthly', 'amount': 500}
      ];

    this.state = {
      tableData: tableData,
      filterText: '',
      filteredData: Object.create(tableData),
    };
  }

  handleTextInput = (event) => {
    const state = this.state;
    state.filterText = event.target.value.toLowerCase();
    state.filteredData = this.state.tableData.filter(item => item.name.toLowerCase().startsWith(state.filterText) || item.status.toLowerCase().startsWith(state.filterText) )
    if(!state.filterText) {
    	state.filteredData = this.state.tableData;
    }
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Daily Expenses Budgets</h1>

        <TextField onChange={this.handleTextInput} style={{'margin-right': '50px'}}/>

          <Table>
				    <TableHeader>
				      <TableRow>
				        <TableHeaderColumn>Name</TableHeaderColumn>
				        <TableHeaderColumn>Frequency</TableHeaderColumn>
				        <TableHeaderColumn>Amount</TableHeaderColumn>
				      </TableRow>
				    </TableHeader>
				    <TableBody>
	            {this.state.filteredData.map((item, index) => {
	                return(
	                  <TableRow>
				        			<TableRowColumn>{item.name}</TableRowColumn>
				        			<TableRowColumn>{item.frequency}</TableRowColumn>
											<TableHeaderColumn>{item.amount}</TableHeaderColumn>
				      			</TableRow>);
	              })}
						</TableBody>
				  </Table>
      </div>
    );
  }
}

export default {
	url: '/dailyExpenses',
  component: DailyExpenses
}