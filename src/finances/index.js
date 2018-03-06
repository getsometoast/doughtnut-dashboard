import React from 'react';
import ChildRouteLoader from '../__components/ChildRouteLoader';
import Overview from './overview';
import DailyExpenses from './dailyExpenses';

const url = '/finances';
const childRoutes = [Overview, DailyExpenses];

export default {
  component:  () => { return (<ChildRouteLoader urlPrefix={url} routes={childRoutes} />); },
  url
}