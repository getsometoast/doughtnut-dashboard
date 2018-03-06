import React, {Component} from 'react';
import Route from 'react-router-dom/Route'
import Overview from './overview';
import DailyExpenses from './dailyExpenses';

const url = '/finances';
const childRoutes = [Overview, DailyExpenses];

class Finances extends Component {
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
  component: Finances,
  url
}