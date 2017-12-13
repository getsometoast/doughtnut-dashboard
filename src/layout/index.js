import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import Home from '../pages/home'
import About from '../pages/about'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import VisibleHeader from './header/VisibleHeader'
import VisibleMenuDrawer from './menuDrawer/VisibleMenuDrawer'
import { connect } from 'react-redux'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {drawerOpen: false, count: 0}
  };

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

const mapStateToProps = state => ({
  count: state.counter.count
})

export default connect(
  mapStateToProps
)(App)
