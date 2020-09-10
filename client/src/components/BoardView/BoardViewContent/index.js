import React from 'react'
import Scrollbars from 'react-custom-scrollbars'

import TaskHeader from './TaskHeader'
import TaskCard from './TaskCard'
import Task from './Task'

import { Wrapper,TaskWrapper } from './styles'

const BoardViewContent = () => {
  return (
    <Wrapper>
      <Scrollbars>
        <TaskWrapper>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </TaskWrapper>
        {/* <TaskHeader />
        <TaskCard /> */}
        {/* Dmanddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd */}
      </Scrollbars>
    </Wrapper>
  )
}

export default BoardViewContent
