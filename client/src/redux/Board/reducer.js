import { TOGGLE_POPUP_CARD } from './actionTypes'

const initialState = {
  togglePopUp: false,
  selectedPopUp: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_POPUP_CARD: 
      return {
        ...state, togglePopUp: !state.togglePopUp, selectedPopUp: action.data }

    default: return { ...state }
  }
}
