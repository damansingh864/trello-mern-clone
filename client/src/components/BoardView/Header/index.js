import React from 'react'

import {
  HeaderWrap,
  LeftSection,
  Title,
  QuickAccess,
  RightSection,
  TeamView,
  Menu
} from './styles'

const Header = () => {
  return (
    <HeaderWrap>
      <LeftSection>
        <Title>Board Name</Title>
        <QuickAccess>
          <i class="far fa-heart"></i>
          <i class="fas fa-heart"></i>
        </QuickAccess>
      </LeftSection>
      <RightSection>
        <TeamView>Damanvir List</TeamView>
        <Menu>Menu</Menu>
      </RightSection>
    </HeaderWrap>
  )
}

export default Header
