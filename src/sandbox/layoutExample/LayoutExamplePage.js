import React, { Component } from 'react';
import Header from './components/HeaderContainer';
import Menu from './components/MenuContainer';
import ExamplePage from './components/PageContainer';
import Footer from './components/FooterComponent';
import Route from 'react-router-dom/Route'

class LayoutExamplePage extends Component {
  render() {
    return (
      <div>
      	<Header />
      	<Menu />
				<Route path="/sandbox/layoutExample/examplePage/:id" component={ExamplePage} />
				<Footer />
      </div>
    );
  }
}

export default LayoutExamplePage;
