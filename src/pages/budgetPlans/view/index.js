import React, { Component } from 'react';
import ItemList from '../../../styleGuide/itemList/ItemList';
import BudgetSummary from '../../../styleGuide/budgetSummary/BudgetSummary';

class ViewBudgetPlan extends Component {
  render() {
    return (
      <div>
        <BudgetSummary />
        <ItemList />
      </div>
    );
  }
}

export default ViewBudgetPlan
