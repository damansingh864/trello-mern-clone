import React from 'react'

import { Wrapper, Input } from './styles'

const InputComp = ({ classStyle, value }) => {
  return (
    <Wrapper className={classStyle}>
      <Input
        type="text"
        // placeholder="Enter list title",
        value={value}
      />
    </Wrapper>
  )
}

export default InputComp

