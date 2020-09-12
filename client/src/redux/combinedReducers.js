import { combineReducers } from 'redux'
import home from './Home/reducer'
import dashboard from './Dashboard/reducer'
import board from './Board/reducer'

const reducers = combineReducers({
  home,
  dashboard,
  board
})

export default reducers