import React, { Component } from 'react';
import Header from './components/HeaderContainer'

/*
master layout

- main container
	- header

		- side menu bar

		- content container
			- breadcrumbs
			- content
				- header
				- other stuff

	- footer
*/

// Main Container
class MasterLayoutPage extends Component {
  render() {
    return (
      <div>
      	<Header />
				<h1>THE MASTER LAYOUT PAGE</h1>
				<div>Header Component</div>
				<div>Side Menu Component</div>
				<div>Content Container</div>
				<div>Footer Component</div>
      </div>
    );
  }
}

export default MasterLayoutPage;
