import React, {Component} from 'react';
import FilterListExamplePage from './FilterListExamplePage'

const url = '/filterListExample';

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
	component: FilterListExample,
	url
}