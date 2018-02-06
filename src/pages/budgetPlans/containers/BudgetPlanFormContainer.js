import BudgetPlanForm from '../components/BudgetPlanForm.js';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () => {
      dispatch();
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    newBudgetPlan: state.budgetPlans.newBudgetPlan
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetPlanForm);
