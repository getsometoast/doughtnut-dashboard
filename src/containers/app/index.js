import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import Home from '../home'
import About from '../about'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {drawerOpen: false}
  }

  muiTheme = getMuiTheme({
    spacing: 1000,
    fontFamily: 'Roboto, sans-serif',
  });

  rightButtons = () => (
    <div>
      <FlatButton label='About' href='/about-us' />
      <FlatButton label='Home' href='/' />
      Count: 0
    </div>
  );

  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div>
          <header>
            <AppBar
              title='Home'
              onLeftIconButtonClick={ () => (this.setState(previousState => {drawerOpen: !previousState.drawerOpen}))}
              iconElementRight={this.rightButtons()}
              style={{padding: '1rem'}}
            />
          </header>

          <main>
            <Drawer 
              open={this.state.drawerOpen} 
              onRequestChange={() => (console.log('open state changed'))}
              docked={false}
              containerStyle={{position: 'absolute', top: '68px', width: '200px'}}>
              <MenuItem>Menu Item</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
            </Drawer>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}