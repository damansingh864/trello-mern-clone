import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Wrap, Menu, AddBtnWrap, Wrapper, CloseIcon, LeftAddBtn } from './styles'

import TextArea from '../../../common/TextArea'
import InfoAddBox from '../../../common/InfoAddBox'
import AddBox from '../../../common/AddBox'

import { cardTitle } from '../../../../redux/Board/actions'

const AddNewCard = ({ taskName }) =>  {
  const dispatch = useDispatch()
  const [cardShow, toggleCard] = useState(false)
  const [text, updateText] = useState('')

  const textHandler = (e) => {
    updateText(e.target.value)
  }

  const addCardBox = (    
    <AddBox toggleCard={() => toggleCard(prevState => !prevState)}>
      + Add New Card                  
    </AddBox>
  )

  const addTextBox = (
    <InfoAddBox
      toggleCard={() => toggleCard(prevShow => !prevShow)}
      onSave={() => {
        dispatch(cardTitle({ name: taskName, data: text }))
        updateText('')
      }}
    >
      {console.log(text)}
      <TextArea onChange={textHandler}>{text}</TextArea>
      {/* <AddBtnWrap>
        <LeftAddBtn>
          <button>
            Save
          </button>
          <CloseIcon onClick={() => toggleCard(prevShow => !prevShow)}><i class="fas fa-times" /></CloseIcon>
        </LeftAddBtn>
        <Menu><i class="fas fa-ellipsis-h" /></Menu>
      </AddBtnWrap> */}
    </InfoAddBox>
  )

  return (
    <Wrapper>
      {cardShow ? addTextBox : addCardBox}
    </Wrapper>
  )
}

export default AddNewCard
