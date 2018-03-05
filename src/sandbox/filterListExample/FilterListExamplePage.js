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

class FilterListExamplePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tableData: [
      	{id: 1, name: 'John Smith', status: 'Employed'},
      	{id: 2, name: 'Randall White', status: 'Employed'},
      	{id: 3, name: 'Elizabeth Jerrywaddle', status: 'Unemployed'},
      	{id: 4, name: 'Frank Cobachia', status: 'Employed'},
      	{id: 5, name: 'Nigel Slater', status: 'Unemployed'},
      	{id: 6, name: 'Wilba Force', status: 'Employed'},
      	{id: 7, name: 'Sarah Von Winklevoss', status: 'Employed'},
      	{id: 8, name: 'Managallaar Jewnotnot', status: 'Unemployed'},
      	{id: 9, name: 'Tinslebottom Friarforce', status: 'Employed'},
      	{id: 10, name: 'Pippa Giantspade', status: 'Employed'},
      	{id: 11, name: 'Costas Nobleman', status: 'Employed'},
      ]
    };
  }

  render() {
    return (
      <div>
        <h1> this is an example of filtering a list of items with freetext search and applying tags to the filtered list. </h1>
        <TextField />

          <Table>
				    <TableHeader>
				      <TableRow>
				        <TableHeaderColumn>ID</TableHeaderColumn>
				        <TableHeaderColumn>Name</TableHeaderColumn>
				        <TableHeaderColumn>Status</TableHeaderColumn>
				      </TableRow>
				    </TableHeader>
				    <TableBody>
	            {this.state.tableData.map((item, index) => {
	                return(
	                  <TableRow>
				        			<TableRowColumn>{item.id}</TableRowColumn>
				        			<TableRowColumn>{item.name}</TableRowColumn>
				        			<TableRowColumn>{item.status}</TableRowColumn>
				      			</TableRow>);
	              })}
						</TableBody>
				  </Table>
      </div>
    );
  }
}

export default FilterListExamplePage;
