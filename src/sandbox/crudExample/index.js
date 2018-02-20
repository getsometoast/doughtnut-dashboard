import React, {Component} from 'react';
import CrudExamplePage from './CrudExamplePage'
import Route from 'react-router-dom/Route'

class CrudExample extends Component {
  render() {
    return (
    <div>
      <Route path="/sandbox/crudExample" component={CrudExamplePage} />
    </div>
    );
  }
}

export default CrudExample;