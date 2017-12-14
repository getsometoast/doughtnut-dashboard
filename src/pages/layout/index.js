import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import Home from '../home'
import About from '../about'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import VisibleHeader from '../../components/header/VisibleHeader'
import VisibleMenuDrawer from '../../components/menuDrawer/VisibleMenuDrawer'

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