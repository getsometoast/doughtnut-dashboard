import React from 'react';
import ChildRouteLoader from '../__components/ChildRouteLoader';
import CrudExample from './crudExample/'
import LayoutExample from './layoutExample/'
import ChartExample from './chartExample'
import TestExample from './testExample'
import FilterListExample from './filterListExample'

const url = '/sandbox';
const childRoutes = [CrudExample, LayoutExample, ChartExample, TestExample, FilterListExample];

export default {
  component:  () => { return (<ChildRouteLoader urlPrefix={url} routes={childRoutes} />); },
  url
}