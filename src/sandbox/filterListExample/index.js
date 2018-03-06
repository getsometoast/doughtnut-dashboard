import React, {Component} from 'react';
import FilterListExamplePage from './FilterListExamplePage'

class FilterListExample extends Component {
  render() {
    return (
    <div>
      <FilterListExamplePage />
    </div>
    );
  }
}

export default {
	url: '/filterListExample',
	component: FilterListExample
}