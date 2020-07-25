import { ADD_POP_UP } from './actionTypes'

export const addPopUp = (toggleValue, direction) => ({
  type: ADD_POP_UP,
  payload: { value: toggleValue, dir: direction }
})
