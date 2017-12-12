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
import { connect } from 'react-redux'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {drawerOpen: false, count: 0}
  }

  muiTheme = getMuiTheme({
    spacing: 1000,
    fontFamily: 'Roboto, sans-serif',
  });

  rightButtons = () => (
    <div>
      <FlatButton label='About' href='/about-us' />
      <FlatButton label='Home' href='/' />
      Count: {this.props.count}
    </div>
  );

  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div>
          <header>
            <AppBar
              title='Home'
              onLeftIconButtonClick={ () => 
                (this.setState(previousState => 
                  {return { drawerOpen: !previousState.drawerOpen };}))}
              iconElementRight={this.rightButtons()}
              style={{padding: '1rem'}}
            />
          </header>

          <main>
            <Drawer 
              open={this.state.drawerOpen} 
              onRequestChange={() => 
                (this.setState(previousState => 
                  {return { drawerOpen: !previousState.drawerOpen };}))}
              docked={false}
              containerStyle={{top: '68px'}}
              width={200}
            >
              <MenuItem href='/'>Home</MenuItem>
              <MenuItem href='/about-us'>About</MenuItem>
            </Drawer>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
})

export default connect(
  mapStateToProps
)(App)
