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

const Header = ({ title, favorites }) => {
  return (
    <HeaderWrap>
      <LeftSection>
        <Title>{title}</Title>
        <QuickAccess>
          {favorites ? 
            <i class="fas fa-heart"></i>
            : <i class="far fa-heart"></i>
          }
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
