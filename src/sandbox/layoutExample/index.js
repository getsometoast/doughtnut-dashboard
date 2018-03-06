import React, {Component} from 'react';
import LayoutExamplePage from './LayoutExamplePage'

class LayoutExample extends Component {
  render() {
    return (
    <div>
      <LayoutExamplePage />
    </div>
    );
  }
}

export default {
	url: '/layoutExample',
	component: LayoutExample
}