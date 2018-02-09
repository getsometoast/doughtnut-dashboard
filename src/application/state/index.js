import { combineReducers } from 'redux'
import count from '../styleGuide/buttons/countButton/reducers'
import layout from '../pages/layout/reducers'

export default combineReducers({
  layout,
  count
});
