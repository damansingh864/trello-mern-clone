import React from 'react'

import { Wrapper, Input } from './styles'

const InputComp = ({ classStyle }) => {
  return (
    <Wrapper className={classStyle}>
      <Input
        type="text"
        placeholder="Enter list title"
      />
    </Wrapper>
  )
}

export default InputComp

