import React from 'react'
import Scrollbars from 'react-custom-scrollbars'

import TaskHeader from '../TaskHeader'
import TaskCard from '../TaskCard'
import AddNewCard from '../AddNewCard'

import { Wrap } from './styles'

const Task  = () => {
  return (
    <Wrap>
      <Scrollbars>
        <TaskHeader />
        <TaskCard />
        <AddNewCard />
      </Scrollbars>
    </Wrap>
  )
}

export default Task
