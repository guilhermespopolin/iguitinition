import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// import * as reducers from 'ducks'

export default createStore(
  // combineReducers(reducers)
  combineReducers({ nook: () => ({}) }),
  composeWithDevTools(applyMiddleware(thunk)),
)
