import React from 'react'

import { Wrapper, TextArea } from './styles'

const TextAreaComp = ({ children }) => {
  return (
    <Wrapper>
      <TextArea placeholder="Enter a title for this card...">
        {children}
      </TextArea>
    </Wrapper>
  )
}

export default TextAreaComp
