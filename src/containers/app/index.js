import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  spacing: 1000,
  fontFamily: 'Roboto, sans-serif',
});

const App = () => (
  <div>
    <MuiThemeProvider muiTheme={muiTheme}>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
      </header>

      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
      </main>
    </MuiThemeProvider>
  </div>
)

export default App;