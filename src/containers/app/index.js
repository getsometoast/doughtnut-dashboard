import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton'

const muiTheme = getMuiTheme({
  spacing: 1000,
  fontFamily: 'Roboto, sans-serif',
});

const rightButtons = () => (
  <div>
    <FlatButton label='About' href='/about-us' />
    <FlatButton label='Home' href='/' />
    Count: 0
  </div>
);

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <header>
        <AppBar
          title='Home'
          iconElementRight={rightButtons()}
          style={{padding: '1rem'}}
        />
      </header>

      <main>
        <Drawer docked={false} open={false} 
          containerStyle={{position: 'absolute', top: '68px', width: '200px'}}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
      </main>
    </div>
  </MuiThemeProvider>
)

export default App;