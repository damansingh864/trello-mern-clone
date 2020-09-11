import React from 'react'

import { Wrapper, SaveBtnWrap, Menu, LeftSec, CloseIcon } from './styles'

const InfoAddBox = ({ children, toggleCard }) => {
  return (
    <Wrapper>
      {children}
      <SaveBtnWrap>
        <LeftSec>
          <button>
            Save
          </button>
          <CloseIcon onClick={toggleCard}><i class="fas fa-times" /></CloseIcon>
        </LeftSec>
        <Menu><i class="fas fa-ellipsis-h" /></Menu>
      </SaveBtnWrap>
    </Wrapper>
  )
}

export default InfoAddBox
