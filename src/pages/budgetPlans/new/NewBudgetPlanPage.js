import React, { Component } from 'react';
import BudgetPlanHeaderContainer from '../containers/HeaderContainer.js';
import BudgetPlanFormContainer from '../containers/BudgetPlanFormContainer.js';

class BudgetPlanNew extends Component {
  render() {
    return (
      <div>
        <BudgetPlanHeaderContainer type="budgetPlan_new"/>
        <BudgetPlanFormContainer />
      </div>
    );
  }
}

export default BudgetPlanNew;
