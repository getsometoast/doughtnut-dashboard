import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FlatButton, TextField } from 'material-ui'

class CreateBudgetPlan extends Component {
  render() {
    return (
      <Grid fluid style={{paddingTop: '1rem'}}>
        <Row style={{marginBottom: '1rem'}}>
          <TextField hintText='Name of budget plan' />
        </Row>
        <Row>
          <FlatButton label='Create' href='/create-budget-plan' />
        </Row>
      </Grid>
    );
  }
}

export default CreateBudgetPlan
