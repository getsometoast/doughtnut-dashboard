import React, {Component} from 'react';
import LayoutExamplePage from './LayoutExamplePage'
import Route from 'react-router-dom/Route'

class LayoutExample extends Component {
  render() {
    return (
    <div>
      <Route path="/sandbox/layoutExample" component={LayoutExamplePage} />
    </div>
    );
  }
}

export default LayoutExample;