import React, {Component} from 'react';
import CrudExampleLayoutPage from './CrudExampleLayoutPage'
import Route from 'react-router-dom/Route'

class CrudExample extends Component {
  render() {
    return (
    <div>
      <Route path="/sandbox/crudExample" component={CrudExampleLayoutPage} />
    </div>
    );
  }
}

export default CrudExample;