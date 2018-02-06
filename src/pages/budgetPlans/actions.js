import axios from 'axios'

export const FETCH_BUDGET_PLAN = 'budgetPlans/create/FETCH_BUDGET_PLAN'
export const FETCH_BUDGET_PLAN_SUCCEEDED = 'budgetPlans/create/FETCH_BUDGET_PLAN_SUCCEEDED'
export const FETCH_BUDGET_PLAN_FAILED = 'budgetPlans/create/FETCH_BUDGET_PLAN_FAILED'
export const CREATE_BUDGET_PLAN = 'budgetPlans/create/CREATE_BUDGET_PLAN'
export const CREATE_BUDGET_PLAN_REQUEST = 'budgetPlans/create/CREATE_BUDGET_PLAN_REQUEST'
export const CREATE_BUDGET_PLAN_PENDING = 'budgetPlans/create/CREATE_BUDGET_PLAN_PENDING'
export const CREATE_BUDGET_PLAN_SUCCEEDED = 'budgetPlans/create/CREATE_BUDGET_PLAN_SUCCEEDED'
export const CREATE_BUDGET_PLAN_FAILED = 'budgetPlans/create/CREATE_BUDGET_PLAN_FAILED'

const ROOT_URL = 'http://localhost:3001';

export function createBudgetPlanAction(props, tokenFromStorage) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/budgetPlans`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });

  return {
    type: CREATE_BUDGET_PLAN,
    payload: request
  };
}

export const createBudgetPlanSucceeded = budgetPlan => ({
  type: CREATE_BUDGET_PLAN_SUCCEEDED,
  payload: budgetPlan
})

export const createBudgetPlanFailed = error => ({
  type: CREATE_BUDGET_PLAN_FAILED,
  payload: error
})

export function fetchBudgetPlan(id) {
  const request = axios.get(`${ROOT_URL}/budgetPlans/${id}`);

  return {
    type: FETCH_BUDGET_PLAN,
    payload: request
  };
}

export function fetchBudgetPlanSucceeded(activeBudgetPlan) {
  return {
    type: FETCH_BUDGET_PLAN_SUCCEEDED,
    payload: activeBudgetPlan
  };
}

export function fetchBudgetPlanFailed(error) {
  return {
    type: FETCH_BUDGET_PLAN_FAILED,
    payload: error
  };
}
