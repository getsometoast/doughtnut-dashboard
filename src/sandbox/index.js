import React, {Component} from 'react';
import CrudExample from './crudExample/'
import LayoutExample from './layoutExample/'

class Sandbox extends Component {
  render() {
    return (
    <div>
      <CrudExample />
      <LayoutExample />
    </div>
    );
  }
}

export default Sandbox;