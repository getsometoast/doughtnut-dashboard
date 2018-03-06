import React, {Component} from 'react';
import LayoutExamplePage from './LayoutExamplePage'

const url = '/layoutExample';

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
	component: LayoutExample,
	url
}