import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {
  createStore,
  applyMiddleware,
  Reducer,
} from 'redux'

export const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(
  thunk,
  sagaMiddleware,
)

// @ts-ignore
const enhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(middleware) : middleware

export const buildStore = (
  reducer: Reducer,
) => {
  return createStore(
    reducer,
    enhancer,
  )
}