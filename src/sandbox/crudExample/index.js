import React, {Component} from 'react';
import CrudExamplePage from './CrudExamplePage'

const url = '/crudExample';

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
	component: CrudExample,
	url
}