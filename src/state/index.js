import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import count from '../styleGuide/buttons/countButton/reducers'
import layout from '../pages/layout/reducers'
import sandboxReducers from '../pages/sandbox/reducers'

export default combineReducers({
  routing: routerReducer,
  sandbox: sandboxReducers,
  layout,
  count
});
