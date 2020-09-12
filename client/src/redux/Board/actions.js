import { TOGGLE_POPUP_CARD, TASK_TITLE_ADD, CARD_TITLE_ADD } from './actionTypes'

export const togglePopUpCard = (data) => ({
  type: TOGGLE_POPUP_CARD,
  data: data
})

export const taskTitle = (data) => ({
  type: TASK_TITLE_ADD,
  payload: data
})

export const cardTitle = (data) => ({
  type: CARD_TITLE_ADD,
  payload: data
})
