import React from 'react'

import { Wrapper, SaveBtnWrap, Menu, LeftSec, CloseIcon } from './styles'

const InfoAddBox = ({ children, toggleCard, classStye, noMenu, onSave }) => {
  return (
    <Wrapper className={classStye}>
      {children}
      <SaveBtnWrap>
        <LeftSec>
          <button onClick={onSave}>
            Save
          </button>
          <CloseIcon onClick={toggleCard}><i class="fas fa-times" /></CloseIcon>
        </LeftSec>
        {!noMenu && <Menu><i class="fas fa-ellipsis-h" /></Menu>}
      </SaveBtnWrap>
    </Wrapper>
  )
}

export default InfoAddBox
