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
        <QuickAccess></QuickAccess>
      </LeftSection>
      <RightSection>
        <TeamView></TeamView>
        <Menu></Menu>
      </RightSection>
    </HeaderWrap>
  )
}

export default Header
