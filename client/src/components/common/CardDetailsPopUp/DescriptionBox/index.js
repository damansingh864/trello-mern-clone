import React, { useState } from 'react'

import Textarea from '../../TextArea'
import InfoAddBox from '../../InfoAddBox'

import {
  Wrapper, BoxWrap
} from './styles'

const DescriptionBox = () => {
  const [box, toggleBox] = useState(false)

  const addDescription = (
    <BoxWrap onClick={() => toggleBox(prevState => !prevState)}>
      Add a more detailed description...
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
