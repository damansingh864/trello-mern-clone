import React, { useState } from 'react'

import Textarea from '../../TextArea'
import InfoAddBox from '../../InfoAddBox'

import {
  Wrapper, BoxWrap
} from './styles'

const DescriptionBox = ({ text }) => {
  const [box, toggleBox] = useState(false)

  const addDescription = (
    <BoxWrap onClick={() => toggleBox(prevState => !prevState)}>
      {text ? text : 'Add a more detailed description...'}
    </BoxWrap>
  )

  const textBox = (
    <InfoAddBox
      toggleCard={() => toggleBox(prevState => !prevState)}
      classStye="descriptionBox"
      noMenu
    >
      <Textarea
        autoFocus        
      >    
        {text}
      </Textarea>
    </InfoAddBox>
  )

  return (
    <Wrapper>
      {box ? textBox : addDescription}
    </Wrapper>
  )
}

export default DescriptionBox
