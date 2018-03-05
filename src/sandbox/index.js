import React, {Component} from 'react';
import CrudExample from './crudExample/'
import LayoutExample from './layoutExample/'
import ChartExample from './chartExample'
import TestExample from './testExample'
import FilterListExample from './filterListExample'

class Sandbox extends Component {
  render() {
    return (
    <div>
      <CrudExample />
      <LayoutExample />
      <ChartExample />
      <TestExample />
      <FilterListExample />
    </div>
    );
  }
}

export default Sandbox;