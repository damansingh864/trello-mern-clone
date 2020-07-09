import { ToggleView } from './actionTypes'

const initialState = {
  view: ''
}

const Home = (state = initialState, action) => {
  switch (action.type) {
    case ToggleView: 
      return { ...state,  view: action.payload }
    default:
      return state
  }
}

export default Home
