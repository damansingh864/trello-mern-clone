import React from 'react'

import { Container, Header, Title, CloseIcon, Content } from './styles'

const PopUp = (props) => (
  <Container>
    <Header>
      <Title>Create</Title>
      <CloseIcon><i className="fas fa-times" /></CloseIcon>
    </Header>
    <Content>
      {props.children}
    </Content>
  </Container>
)

export default PopUp
