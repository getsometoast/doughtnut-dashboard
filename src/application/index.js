import React from 'react';
import ChildRouteLoader from '../__components/ChildRouteLoader';
import Home from './pages/home';
import About from './pages/about';

const url = '/application';
const childRoutes = [Home, About];

export default {
  component:  () => { return (<ChildRouteLoader urlPrefix={url} routes={childRoutes} />); },
  url
}