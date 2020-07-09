import React from 'react'

import { Wrapper, Section, Header, Content, CreateBoardBtn } from './styles'

const BoardContent = () => {
  return (
    <Wrapper>
      <Section>
        <Header><i className="far fa-user" /> Personal Boards</Header>
        <Content>
          <CreateBoardBtn>
            Create new board
          </CreateBoardBtn>
        </Content>
      </Section>
    </Wrapper>
  )
}

export default BoardContent
