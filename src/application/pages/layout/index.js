import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import Home from '../home'
import About from '../about'
import VisibleHeader from '../../styleGuide/header/VisibleHeader'
import VisibleMenuDrawer from '../../styleGuide/menuDrawer/VisibleMenuDrawer'

export default class App extends Component {

  render() {
    return (
      <div>
       <VisibleHeader />
        <main>
          <VisibleMenuDrawer />
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    );
  }
}
