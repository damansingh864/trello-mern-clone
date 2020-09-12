import React from 'react'

import Header from './Header'
import BoardViewContent from './BoardViewContent'

import { 
  BoardWrapper
} from './styles'


const boardData = {
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

const BoardView = () => {
  return (
    <BoardWrapper>
      <Header
        title={boardData.title}
        favorites={boardData.favorites}
      />
      <BoardViewContent
        taskName={boardData.tasksName}
        task={boardData.task}
      />
    </BoardWrapper>
  )
}

export default BoardView
