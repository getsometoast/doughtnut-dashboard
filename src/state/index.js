import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import count from '../components/buttons/countButton/reducers'
import layout from '../pages/layout/reducers'

export default combineReducers({
  routing: routerReducer,
  layout,
  count
});
