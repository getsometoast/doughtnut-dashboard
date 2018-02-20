import React, {Component} from 'react';
import MasterLayoutPage from './MasterLayoutPage'
import Route from 'react-router-dom/Route'

class LayoutExample extends Component {
  render() {
    return (
    <div>
      <Route path="/sandbox/layoutExample" component={MasterLayoutPage} />
    </div>
    );
  }
}

export default LayoutExample;