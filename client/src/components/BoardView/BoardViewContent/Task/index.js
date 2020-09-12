import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { useDispatch } from 'react-redux'

import TaskHeader from '../TaskHeader'
import TaskCard from '../TaskCard'
import AddNewCard from '../AddNewCard'
import { togglePopUpCard } from '../../../../redux/Board/actions'

import { Wrap } from './styles'

const Task  = ({ name, tasks, togglePopUp }) => {
  const dispatch = useDispatch()

  return (
    <Wrap>
      <Scrollbars>
        <TaskHeader name={name} />
        {tasks.map(task => (
          <TaskCard
            name={task.name}
            image={task.image}
            description={task.description}
            activity={task.activity}
            togglePopUp={() => dispatch(togglePopUpCard(task))}
          />
        ))}        
        <AddNewCard taskName={name} />
      </Scrollbars>
    </Wrap>
  )
}

export default Task
