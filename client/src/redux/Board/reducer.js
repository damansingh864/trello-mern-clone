import { TOGGLE_POPUP_CARD, TASK_TITLE_ADD, CARD_TITLE_ADD } from './actionTypes'

const initialState = {
  togglePopUp: false,
  selectedPopUp: {},
  boardData: {
    title: "Super Admin",
    favorites: true,
    tasksName: ["To Do", "Doing", "Done"],
    task: {
      "To Do": [
        {
          name: 'Old fashioned recipe for preventing allergies and chemicals',
          image: 'ad',
          description: "This is our Description",    
          activity: {
            comments: 2,
            favorites: 20,
            attachments: 10
          }
        }, {
          name: 'Remove Operation',        
          description: "This is our Description",    
          activity: {
            comments: 0,
            favorites: 20,
            attachments: 0
          }
        }
      ],
      "Doing": [
        {
          name: 'Simple screen data we have to show',       
          description: "This is our Description",    
          activity: {
            comments: 0,
            favorites: 20,
            attachments: 0
          }
        },
        {
          name: 'Merge conflict should be solve',
          image: 'ad',
          description: "This is our Description",    
          activity: {
            comments: 42,
            favorites: 20,
            attachments: 10
          }
        },
        {
          name: 'Merge Both data',
          image: 'ad',
          description: "This is our Description",    
          activity: {
            comments: 42,
            favorites: 20,
            attachments: 10
          }
        }
      ],
      "Done": []
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_POPUP_CARD: 
      return {
        ...state, togglePopUp: !state.togglePopUp, selectedPopUp: action.data }

    case TASK_TITLE_ADD:
        return {
          ...state,
          boardData: {
            ...state.boardData,
            task: { ...state.boardData.task, [action.payload]: [] },
            tasksName: [ ...state.boardData.tasksName, action.payload ]
          }
        }

    case CARD_TITLE_ADD:
        return {
          ...state,
          boardData: {
            ...state.boardData,
            tasksName: [ ...state.boardData.tasksName ],
            task: { ...state.boardData.task, [action.payload.name]: [...state.boardData.task[action.payload.name], { name: action.payload.data }] },
          }
        }

    default: return { ...state }
  }
}
