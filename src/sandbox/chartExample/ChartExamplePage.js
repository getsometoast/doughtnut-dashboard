import React, { Component } from 'react'
import BarChart from './BarChart'

class ChartExamplePage extends Component {
	render() {
		return (
			<div className='App'>
				<div className='App-header'>
					<h2>Bar Chart Example</h2>
				</div>
				<div>
					<BarChart data={[5,10,1,3, 10, 2, 3, 4, 10 ,8, 8]} size={[600, 600]} />
				</div>
			</div>
		)
	}
}

export default ChartExamplePage;