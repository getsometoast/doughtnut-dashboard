import React, {Component} from 'react';
import Route from 'react-router-dom/Route'
import CrudExample from './crudExample/'
import LayoutExample from './layoutExample/'
import ChartExample from './chartExample'
import TestExample from './testExample'
import FilterListExample from './filterListExample'

const url = '/sandbox';
const childRoutes = [CrudExample, LayoutExample, ChartExample, TestExample, FilterListExample];

class Sandbox extends Component {
  render() {
    return (
    <div>
      {childRoutes.map(route => {
        return (<Route path={`${url}${route.url}`} component={route.component} />);
      })}
    </div>
    );
  }
}

export default {
  component: Sandbox,
  url
}