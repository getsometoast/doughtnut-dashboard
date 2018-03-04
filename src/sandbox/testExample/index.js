import React, {Component} from 'react';
import AnExampleTestedComponent from './TestedComponentPage'
import Route from 'react-router-dom/Route'

class TestExample extends Component {
  render() {
    return (
    <div>
      <Route path="/sandbox/testExample" component={AnExampleTestedComponent} />
    </div>
    );
  }
}

export default TestExample;