import React, {Component} from 'react';
import ChartExamplePage from './ChartExamplePage'

class ChartExample extends Component {
  render() {
    return (
    <div>
    	<ChartExamplePage /> 
    </div>
    );
  }
}

export default {
	url: '/chartExample',
	component: ChartExample
}