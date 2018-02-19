import React, { Component } from 'react';
import Header from './components/HeaderContainer';
import Menu from './components/MenuContainer';
import ExamplePage from './components/PageComponent';
import Footer from './components/FooterComponent';

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
      	<Menu />
				<ExamplePage />
				<Footer />
      </div>
    );
  }
}

export default MasterLayoutPage;
