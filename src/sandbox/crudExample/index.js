import React, {Component} from 'react';
import CrudExamplePage from './CrudExamplePage'

class CrudExample extends Component {
  render() {
    return (
    <div>
      <CrudExamplePage />
    </div>
    );
  }
}

export default {
	url: '/crudExample',
	component: CrudExample
}