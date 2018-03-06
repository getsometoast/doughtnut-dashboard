import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import Home from '../home';
import About from '../about';

const url = '/application';
const childRoutes = [Home, About];

class App extends Component {
  render() {
    return (
      <div>
        {childRoutes.map(route => route)}
      </div>
    );
  }
}

export default {
  component: App,
  url
}