import React, { Component } from 'react';
import Header from './components/HeaderContainer';
import Menu from './components/MenuContainer';
import ExamplePage from './components/PageComponent';
import ExamplePage2 from './components/PageComponent';
import Footer from './components/FooterComponent';
import Route from 'react-router-dom/Route'

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
        <Route exact path="/sandbox/layoutExample/example1" component={ExamplePage} />
        <Route exact path="/sandbox/layoutExample/example2" component={ExamplePage2} />
      </div>
    );
  }
}

export default MasterLayoutPage;
