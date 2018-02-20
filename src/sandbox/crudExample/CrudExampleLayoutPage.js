import React, {Component} from 'react';
import TestDataForm from './new/TestDataFormContainer'
import TestDataView from './view/ViewTestDataContainer'
import TestDataList from './list/ListTestDataContainer'
import Route from 'react-router-dom/Route'

class CrudExample extends Component {
  render() {
    return (
    <div>
      <h1>CRUD Example Page</h1>
      <TestDataList />
      <hr />
      <Route path="/sandbox/crudExample/new" component={TestDataForm} />
      <Route path="/sandbox/crudExample/view/:id" component={TestDataView} />
    </div>
    );
  }
}

export default CrudExample;