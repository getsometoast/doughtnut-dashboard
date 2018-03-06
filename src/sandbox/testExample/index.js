import React, {Component} from 'react';
import AnExampleTestedComponent from './TestedComponentPage'

const url = '/testExample';

class TestExample extends Component {
  render() {
    return (
    <div>
      <AnExampleTestedComponent />
    </div>
    );
  }
}

export default {
	component: TestExample,
	url
};