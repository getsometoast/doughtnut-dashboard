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

class FilterListExamplePage extends Component {

  constructor(props) {
    super(props);

    const tableData = [
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


  onClickTag = (event) => {
  	const state = this.state;

  	state.tableData.map(item => {
			if(this.state.filteredData.find(element => element.id === item.id)) {
				item.tag = 'DONE';
			}
  		return item;
  	})

    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1> this is an example of filtering a list of items with freetext search and applying tags to the filtered list. </h1>

        <TextField onChange={this.handleTextInput} style={{'margin-right': '50px'}}/><RaisedButton label='DONE' onClick={this.onClickTag}/>

          <Table>
				    <TableHeader>
				      <TableRow>
				        <TableHeaderColumn>ID</TableHeaderColumn>
				        <TableHeaderColumn>Name</TableHeaderColumn>
				        <TableHeaderColumn>Status</TableHeaderColumn>
				        <TableHeaderColumn>Tag</TableHeaderColumn>
				      </TableRow>
				    </TableHeader>
				    <TableBody>
	            {this.state.filteredData.map((item, index) => {
	                return(
	                  <TableRow>
				        			<TableRowColumn>{item.id}</TableRowColumn>
				        			<TableRowColumn>{item.name}</TableRowColumn>
				        			<TableRowColumn>{item.status}</TableRowColumn>
											<TableHeaderColumn>{item.tag}</TableHeaderColumn>
				      			</TableRow>);
	              })}
						</TableBody>
				  </Table>
      </div>
    );
  }
}

export default FilterListExamplePage;
