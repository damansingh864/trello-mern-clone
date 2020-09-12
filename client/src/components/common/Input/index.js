import React from 'react'

import { Wrapper, Input } from './styles'

const InputComp = ({ classStyle, value, onChange }) => {
  return (
    <Wrapper className={classStyle}>
      <Input
        type="text"
        // placeholder="Enter list title",
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  )
}

export default InputComp

