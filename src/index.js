import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store from './store'
import history from './history'
import Route from 'react-router-dom/Route'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import App from './pages/layout' 
import CreateTestDataPage from './pages/sandbox/crudExample/new/CreateTestPage'
import ViewTestDataPage from './pages/sandbox/crudExample/view/ViewTestDataPage'
import ListTestDataPage from './pages/sandbox/crudExample/list/ListTestDataPage'
import MasterLayoutPage from './pages/sandbox/layoutExample/MasterLayoutPage'

const target = document.querySelector('#root')

const muiTheme = getMuiTheme({
  spacing: 1000,
  fontFamily: 'Roboto, sans-serif',
});

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
	      	<Route exact path="/" component={App} />
	      	<Route exact path="/sandbox/crudExample" component={ListTestDataPage} />
	        <Route exact path="/sandbox/layoutExample" component={MasterLayoutPage} />
	        <Route exact path="/sandbox/crudExample/new" component={CreateTestDataPage} />
	        <Route exact path="/sandbox/crudExample/view/:id" component={ViewTestDataPage} />
				</MuiThemeProvider>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)