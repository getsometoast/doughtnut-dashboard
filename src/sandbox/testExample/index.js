import React, {Component} from 'react';
import AnExampleTestedComponent from './TestedComponentPage'

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
	url: '/testExample',
	component: TestExample
};