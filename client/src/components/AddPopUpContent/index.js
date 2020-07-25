import React from 'react'
import PopUpWrapper from '../common/PopUp'

const AddPopUpContent = (props) => {
  return (
    <PopUpWrapper title="Create" direction={props.direction}>
      Add Content
    </PopUpWrapper> 
  )
}

export default AddPopUpContent
