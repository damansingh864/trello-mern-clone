import React from 'react'

import Header from './Header'
import BoardViewContent from './BoardViewContent'

import { 
  BoardWrapper
} from './styles'

const BoardView = () => {
  return (
    <BoardWrapper>
      <Header />
      <BoardViewContent />
    </BoardWrapper>
  )
}

export default BoardView
