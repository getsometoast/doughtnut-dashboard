import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store from './store'
import history from './history'
import Route from 'react-router-dom/Route'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import App from './application/pages/layout' 
import CreateTestDataPage from './sandbox/crudExample/new/CreateTestPage'
import ViewTestDataPage from './sandbox/crudExample/view/ViewTestDataPage'
import ListTestDataPage from './sandbox/crudExample/list/ListTestDataPage'
import MasterLayoutPage from './sandbox/layoutExample/MasterLayoutPage'

const target = document.querySelector('#root')

const muiTheme = getMuiTheme({
  spacing: 1000,
  fontFamily: 'Roboto, sans-serif',
});

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <MuiThemeProvider muiTheme={muiTheme}>
	      	<Route exact path="/" component={App} />
	      	<Route exact path="/sandbox/crudExample" component={ListTestDataPage} />
	        <Route exact path="/sandbox/layoutExample" component={MasterLayoutPage} />
	        <Route exact path="/sandbox/crudExample/new" component={CreateTestDataPage} />
	        <Route exact path="/sandbox/crudExample/view/:id" component={ViewTestDataPage} />
				</MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  target
)