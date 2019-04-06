import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import blog from './reducer'

const store = createStore(
  combineReducers({ blog }),
  applyMiddleware(thunk)
)
const dispatch = action => store.dispatch(action)

export { store, dispatch }
