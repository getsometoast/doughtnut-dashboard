import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const ItemList = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Amount</TableHeaderColumn>
        <TableHeaderColumn>Note</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>12/12/20017</TableRowColumn>
        <TableRowColumn>900</TableRowColumn>
        <TableRowColumn>We bought sometihng</TableRowColumn>
      </TableRow>
    </TableBody>
	</Table>
);

export default ItemList
