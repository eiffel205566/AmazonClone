import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducer/index'
import { rootSaga } from '../middleware'

//Note: create initialSagaMiddleware
const initialSagaMiddleware = createSagaMiddleware()

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//Note: Combined reducers
const store = createStore(
  combineReducers({ rootReducer }),
  storeEnhancers(applyMiddleware(initialSagaMiddleware))
)

initialSagaMiddleware.run(rootSaga)

window.store = store
export default store
