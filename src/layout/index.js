import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import Home from '../pages/home'
import About from '../pages/about'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import VisibleHeader from './header/VisibleHeader'
import VisibleMenuDrawer from './menuDrawer/VisibleMenuDrawer'

export default class App extends Component {

  muiTheme = getMuiTheme({
    spacing: 1000,
    fontFamily: 'Roboto, sans-serif',
  });

  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div>
         <VisibleHeader />

          <main>
            <VisibleMenuDrawer />
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}
