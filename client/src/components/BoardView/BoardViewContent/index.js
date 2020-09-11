import React, { useState } from 'react'
import Scrollbars from 'react-custom-scrollbars'

import TaskHeader from './TaskHeader'
import TaskCard from './TaskCard'
import Task from './Task'
import InfoAddBox from '../../common/InfoAddBox'
import AddBox from '../../common/AddBox'
import Input from '../../common/Input'

import { Wrapper,TaskWrapper, AddTaskWrap } from './styles'

const BoardViewContent = () => {
  const [toggle, toggleCard] = useState(false)

  const AddCard = (
    <AddBox toggleCard={() => toggleCard(prevState => !prevState)} style={{ height: 'auto', padding: '6px 0' }}>
      + Add Another List
    </AddBox>
  )

  const taskAdd = (
    <InfoAddBox  toggleCard={() => toggleCard(prevState => !prevState)}>
      <Input />
    </InfoAddBox>
  )
    console.log(toggle)
  return (
    <Wrapper>
      <Scrollbars>
        <TaskWrapper>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <AddTaskWrap>
            {toggle ? taskAdd : AddCard}
          </AddTaskWrap>
          {/* <Task />
          <Task />
          <Task /> */}
        </TaskWrapper>
        {/* <TaskHeader />
        <TaskCard /> */}
        {/* Dmanddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd */}
      </Scrollbars>
    </Wrapper>
  )
}

export default BoardViewContent
