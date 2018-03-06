import React, {Component} from 'react';
import ChildRouteLoader from '../__components/ChildRouteLoader';
import CrudExample from './crudExample/'
import LayoutExample from './layoutExample/'
import ChartExample from './chartExample'
import TestExample from './testExample'
import FilterListExample from './filterListExample'

const url = '/sandbox';
const childRoutes = [CrudExample, LayoutExample, ChartExample, TestExample, FilterListExample];

class Sandbox extends Component {
  render() { return (<ChildRouteLoader urlPrefix={url} routes={childRoutes} />); }
}

export default {
  component: Sandbox,
  url
}