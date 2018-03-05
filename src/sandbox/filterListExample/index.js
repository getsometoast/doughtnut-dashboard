import React, {Component} from 'react';
import FilterListExamplePage from './FilterListExamplePage'
import Route from 'react-router-dom/Route'

class FilterListExample extends Component {
  render() {
    return (
    <div>
      <Route path="/sandbox/filterListExample" component={FilterListExamplePage} />
    </div>
    );
  }
}

export default FilterListExample;