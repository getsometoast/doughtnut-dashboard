import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ItemList from '../../../styleGuide/itemList/ItemList';
import BudgetSummary from '../../../styleGuide/budgetSummary/BudgetSummary';

class ViewBudgetPlan extends Component {
  render() {
    return (
      <Grid fluid style={{paddingTop: '1rem'}}>
        <Row style={{marginBottom: '1rem'}}>
          <BudgetSummary />
        </Row>
        <Row style={{marginBottom: '1rem'}}>
        	<ItemList />
        </Row>
      </Grid>
    );
  }
}

export default ViewBudgetPlan
