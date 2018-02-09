import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import applicationState from './application/state'
import sandboxState from './sandbox/reducers'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const reducers = combineReducers({
  routing: routerReducer,
  application: applicationState,
  sandbox: sandboxState,
});

const store = createStore(
  reducers,
  initialState,
  composedEnhancers
)

export default store
