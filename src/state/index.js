import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import count from '../styleGuide/buttons/countButton/reducers'
import layout from '../pages/layout/reducers'
import testHarness from '../pages/sandbox/crudExample/TestReducers'
import sandboxReducers from '../pages/sandbox/reducers'

export default combineReducers({
  routing: routerReducer,
  testHarness,
  sandbox: sandboxReducers,
  layout,
  count
});
