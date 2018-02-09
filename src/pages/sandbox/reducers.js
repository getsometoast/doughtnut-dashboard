import { combineReducers } from 'redux'
import crudExampleReducers from './crudExample/TestReducers'
import layoutExampleReducers from './layoutExample/Reducers'

export default combineReducers({
	crudExample: crudExampleReducers,
	layoutExample: layoutExampleReducers,
});
