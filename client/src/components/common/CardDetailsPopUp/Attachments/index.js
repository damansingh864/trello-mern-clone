import React from 'react'

import {
  Wrapper, ImageWrap, AttachmentInfo, Title,
  ActionContainer, CoverAction, Time, Actions
} from './styles'

const Attachments = () => {
  return (
    <Wrapper>
      <ImageWrap></ImageWrap>
      <AttachmentInfo>
        <Title>Image Title</Title>
        <ActionContainer>
          <Time>Added an hour ago</Time> -
          <Actions>Comment</Actions> -
          <Actions>Delete</Actions> -
          <Actions>Edit</Actions>
        </ActionContainer>
        <CoverAction>
          <i className="far fa-image" /> <Actions>Make Cover</Actions>
        </CoverAction>
      </AttachmentInfo>
    </Wrapper>
  )
}

export default Attachments
