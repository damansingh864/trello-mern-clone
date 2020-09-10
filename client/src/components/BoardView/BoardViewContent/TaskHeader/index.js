import React from 'react'

import { Wrapper, Title, Menu } from './styles'

const TaskHeader = () => {
  return (
    <Wrapper>
      <Title>Design</Title>
      <Menu><i class="fas fa-ellipsis-h" /></Menu>
    </Wrapper>
  )
}

export default TaskHeader
