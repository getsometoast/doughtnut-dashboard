import { CREATE_BUDGET_PLAN, CREATE_BUDGET_PLAN_SUCCEEDED, CREATE_BUDGET_PLAN_FAILED,
 FETCH_BUDGET_PLAN, FETCH_BUDGET_PLAN_SUCCEEDED, FETCH_BUDGET_PLAN_FAILED } from './actions'

const INITIAL_STATE = { 
  //postsList: { posts: [], error:null, loading: false},
  newBudgetPlan: { budgetPlan:null, error: null, loading: false },
  activeBudgetPlan: { budgetPlan:null, error:null, loading: false },
  //deletedPost: {post: null, error:null, loading: false},
};

export default function budgetPlans(state = INITIAL_STATE, action) {
  let error;

  switch (action.type) {
    case FETCH_BUDGET_PLAN:
      return { ...state, activeBudgetPlan:{...state.activeBudgetPlan, loading: true}};
    case FETCH_BUDGET_PLAN_SUCCEEDED:
      return { ...state, activeBudgetPlan: {budgetPlan: action.payload, error:null, loading: false}};
    case FETCH_BUDGET_PLAN_FAILED:
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return { ...state, activeBudgetPlan: {budgetPlan: null, error:error, loading:false}};

    case CREATE_BUDGET_PLAN:
      return {...state, newBudgetPlan: {...state.newBudgetPlan, loading: true}} // update the loading flag
    case CREATE_BUDGET_PLAN_SUCCEEDED:
      return {...state, newBudgetPlan: {budgetPlan:action.payload, error:null, loading: false}}
    case CREATE_BUDGET_PLAN_FAILED:
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return {...state, newBudgetPlan: {budgetPlan:null, error:error, loading: false}}

    default:
      return state;
  }
}
