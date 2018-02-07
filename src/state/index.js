import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import count from '../styleGuide/buttons/countButton/reducers'
import layout from '../pages/layout/reducers'
import budgetPlans from '../pages/budgetPlans/reducers'
import testHarness from '../pages/sandbox/persistingFormDataToBackend/TestReducers'

export default combineReducers({
  routing: routerReducer,
  budgetPlans,
  testHarness,
  layout,
  count
});
