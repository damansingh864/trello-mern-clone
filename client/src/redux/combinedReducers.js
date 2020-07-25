import { combineReducers } from 'redux'
import home from './Home/reducer'
import dashboard from './Dashboard/reducer'

const reducers = combineReducers({
  home,
  dashboard
})

export default reducers