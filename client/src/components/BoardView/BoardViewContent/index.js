import React, { useState } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { useSelector, useDispatch } from 'react-redux'

import TaskHeader from './TaskHeader'
import TaskCard from './TaskCard'
import Task from './Task'
import InfoAddBox from '../../common/InfoAddBox'
import AddBox from '../../common/AddBox'
import Input from '../../common/Input'
import CardDetailPopUp from '../../common/CardDetailsPopUp'
import { togglePopUpCard } from '../../../redux/Board/actions'
import { memoizedBoardViewState } from '../../../redux/Board/selectors'

import { Wrapper,TaskWrapper, AddTaskWrap } from './styles'

const BoardViewContent = ({ taskName, task: taskList }) => {
  const dispatch = useDispatch()
  const { togglePopUp, selectedPopUp } = useSelector(memoizedBoardViewState)
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
          {taskName.map(name => (
            <Task
              name={name}
              tasks={taskList[name]}
            />
          ))}
          {/* <Task />
          <Task />
          <Task />
          <Task />
          <Task /> */}
          <AddTaskWrap>
            {toggle ? taskAdd : AddCard}
          </AddTaskWrap>
          {togglePopUp && (
            <CardDetailPopUp
              details={selectedPopUp}
              onExit={() => dispatch(togglePopUpCard({}))}
            />
          )}
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
