import React, { Component } from 'react';
import ChildRouteLoader from '../__components/ChildRouteLoader';
import Home from './pages/home';
import About from './pages/about';

const url = '/application';
const childRoutes = [Home, About];

class App extends Component {
	render() { return (<ChildRouteLoader urlPrefix={url} routes={childRoutes} />); }
}

export default {
  component: App,
  url
}