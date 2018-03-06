import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store from './store'
import history from './history'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import App from './application/pages/layout' 
import Sandbox from './sandbox';
import Finances from './finances';
import VisibleHeader from './application/styleGuide/header/VisibleHeader';
import VisibleMenuDrawer from './application/styleGuide/menuDrawer/VisibleMenuDrawer';
import ChildRouteLoader from './__components/ChildRouteLoader';

const target = document.querySelector('#root')

const muiTheme = getMuiTheme({
  spacing: 1000,
  fontFamily: 'Roboto, sans-serif',
});

const childRoutes = [App, Sandbox, Finances]

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <MuiThemeProvider muiTheme={muiTheme}>
        <div>
         <VisibleHeader />
          <main>
            <VisibleMenuDrawer />
            <ChildRouteLoader routes={childRoutes} />
          </main>
        </div>
				</MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  target
)