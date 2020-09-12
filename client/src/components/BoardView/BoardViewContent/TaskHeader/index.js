import React from 'react'

import { Wrapper, Title, Menu } from './styles'

const TaskHeader = ({ name }) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      <Menu><i class="fas fa-ellipsis-h" /></Menu>
    </Wrapper>
  )
}

export default TaskHeader
