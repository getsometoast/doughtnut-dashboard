import React, {Component} from 'react';
import TestDataContainer from './components/TestDataFormContainer'
import ViewTestDataPage from './view/ViewTestDataPage'
import ListTestDataContainer from './components/ListTestDataContainer'
import Route from 'react-router-dom/Route'

class CrudExample extends Component {
  render() {
    return (
    <div>
      <h1>CRUD Example Page</h1>
      <ListTestDataContainer />
      <hr />
      <Route path="/sandbox/crudExample/new" component={TestDataContainer} />
      <Route path="/sandbox/crudExample/view/:id" component={ViewTestDataPage} />
    </div>
    );
  }
}

export default CrudExample;