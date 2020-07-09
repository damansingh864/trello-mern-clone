import { createStore, applyMiddleware } from 'redux'
import reducers from './combinedReducers'
import { logger } from 'redux-logger'

console.log(process.env, " Cheignin env")
const middlewares = []

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(reducers, applyMiddleware(...middlewares))


export default store