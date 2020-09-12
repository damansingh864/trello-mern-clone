import React from 'react'

import { Wrapper, TextArea } from './styles'

const TextAreaComp = ({ children, focus }) => {
  return (
    <Wrapper>
      <TextArea placeholder="Enter a title for this card..." autoFocus={focus}>
        {children}
      </TextArea>
    </Wrapper>
  )
}

export default TextAreaComp
