import React, { Component, PropTypes } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import renderField from './renderField';
import { createBudgetPlanAction, createBudgetPlanSucceeded, createBudgetPlanFailed } from '../actions';
import { withRouter } from 'react-router'

const createBudgetPlan = (values, dispatch) => {
  return dispatch(createBudgetPlanAction(values, sessionStorage.getItem('jwtToken')))
    .then(result => {
      if (result.payload.response && result.payload.response.status !== 200) {
        dispatch(createBudgetPlanFailed(result.payload.response.data));
        throw new SubmissionError(result.payload.response.data);
      }
      dispatch(createBudgetPlanSucceeded(result.payload.data));
    });
}

function validate(values) {
  const errors = {};

  return errors;
}

class BudgetPlanForm extends Component {

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
    // this.props.resetMe();
  }

  // todo - what does this do?
  componentWillReceiveProps(nextProps) {
    if (nextProps.newBudgetPlan.budgetPlan && !nextProps.newBudgetPlan.error) {
      this.props.history.push('/budgetPlans/1');
    }
  } // maybe refreshes the page?

  renderError(newBudgetPlan) {
    if (newBudgetPlan && newBudgetPlan.error && newBudgetPlan.error.message) {
      return (
        <div className="alert alert-danger">
          { newBudgetPlan ? newBudgetPlan.error.message : '' }
        </div>
        );
    } else {
      return <span></span>
    }
  }

  render() {
    const {handleSubmit, submitting, newBudgetPlan} = this.props;
    return (
      <div className='container'>
        { this.renderError(newBudgetPlan) }
        <form onSubmit={ handleSubmit(createBudgetPlan) }>
          <Field
                 name="name"
                 type="text"
                 component={ renderField }
                 label="Name*" />
          <Field
                 name="amount"
                 type="text"
                 component={ renderField }
                 label="Amount*" />
          <Field
                 name="endDate"
                 type="text"
                 component={ renderField }
                 label="EndDate*" />
          <div>
            <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={ submitting }>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const BudgetPlanFormWithRouter = withRouter(BudgetPlanForm)

export default reduxForm({
  form: 'BudgetPlanForm', // a unique identifier for this form
  validate // <--- validation function given to redux-form
})(BudgetPlanFormWithRouter)