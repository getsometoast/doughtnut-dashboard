import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store from './store'
import history from './history'
import Route from 'react-router-dom/Route'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import App from './application/pages/layout' 
import Sandbox from './sandbox';

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

          <Sandbox />
				</MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  target
)