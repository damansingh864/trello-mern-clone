import { ADD_POP_UP } from './actionTypes'

const initialState = {
  toggleAddPopUp: false,
  popUpDirection: 'left'
}

const Dashboard = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POP_UP: 
      return {
        ...state,
        toggleAddPopUp: action.payload.value,
        popUpDirection: action.payload.dir
      }

    default:
      return state
  }
}

export default Dashboard
