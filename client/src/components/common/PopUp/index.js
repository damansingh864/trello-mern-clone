import React from 'react'

import { Container, Header, Title, CloseIcon, Content } from './styles'

const PopUp = (props) => (
  <Container style={{ [props.direction]: '4px' }}>
    <Header>
      <Title>{props.title}</Title>
      <CloseIcon><i className="fas fa-times" /></CloseIcon>
    </Header>
    <Content>
      {props.children}
    </Content>
  </Container>
)

export default PopUp
