import React, {Component} from 'react';
import ChartExamplePage from './ChartExamplePage'

const url = '/chartExample';

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
	component: ChartExample,
	url
}