import React, {Component} from 'react';
import ChildRouteLoader from '../__components/ChildRouteLoader';
import Overview from './overview';
import DailyExpenses from './dailyExpenses';

const url = '/finances';
const childRoutes = [Overview, DailyExpenses];

class Finances extends Component {
  render() { return (<ChildRouteLoader urlPrefix={url} routes={childRoutes} />); }
}

export default {
  component: Finances,
  url
}