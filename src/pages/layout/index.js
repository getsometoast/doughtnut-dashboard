import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import Home from '../home'
import About from '../about'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import VisibleHeader from '../../styleGuide/header/VisibleHeader'
import VisibleMenuDrawer from '../../styleGuide/menuDrawer/VisibleMenuDrawer'
import ViewBudgetPlan from '../budgetPlans/view'
import CreateBudgetPlan from '../budgetPlans/create'

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
            <Route exact path="/view-budget-plan" component={ViewBudgetPlan} />
            <Route exact path="/create-budget-plan" component={CreateBudgetPlan} />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}
