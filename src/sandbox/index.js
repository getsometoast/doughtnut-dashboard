import React, {Component} from 'react';
import CrudExample from './crudExample/'
import LayoutExample from './layoutExample/'
import ChartExample from './chartExample'

class Sandbox extends Component {
  render() {
    return (
    <div>
      <CrudExample />
      <LayoutExample />
      <ChartExample />
    </div>
    );
  }
}

export default Sandbox;