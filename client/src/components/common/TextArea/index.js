import React from 'react'

import { Wrapper, TextArea } from './styles'

const TextAreaComp = ({ children, focus, onChange }) => {
  return (
    <Wrapper>
      <TextArea placeholder="Enter a title for this card..." autoFocus={focus} onChange={onChange}>
        {children}
      </TextArea>
    </Wrapper>
  )
}

export default TextAreaComp
