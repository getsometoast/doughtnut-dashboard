import React, {Component} from 'react';
import Route from 'react-router-dom/Route'
import ChartExamplePage from './ChartExamplePage'

class ChartExample extends Component {
  render() {
    return (
    <div>
    	<Route exact path='/sandbox/chartExample' component={ChartExamplePage} /> 
    </div>
    );
  }
}

export default ChartExample;