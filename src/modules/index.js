import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import page from '../pages/reducers'
import layout from '../layout/reducers'

export default combineReducers({
  routing: routerReducer,
  layout,
  page
});
