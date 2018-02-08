import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import Home from '../home'
import About from '../about'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import VisibleHeader from '../../styleGuide/header/VisibleHeader'
import VisibleMenuDrawer from '../../styleGuide/menuDrawer/VisibleMenuDrawer'
import CreateTestDataPage from '../sandbox/crudExample/new/CreateTestPage'
import ViewTestDataPage from '../sandbox/crudExample/view/ViewTestDataPage'
import ListTestDataPage from '../sandbox/crudExample/list/ListTestDataPage'

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
            <Route exact path="/sandbox/crudExample" component={ListTestDataPage} />
            <Route exact path="/sandbox/crudExample/new" component={CreateTestDataPage} />
            <Route exact path="/sandbox/crudExample/view/:id" component={ViewTestDataPage} />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}
