import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import layout from '../layout/menuDrawer/reducers'

export default combineReducers({
  routing: routerReducer,
  layout,
  counter
});
