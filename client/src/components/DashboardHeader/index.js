import React from 'react'
import { Header, HeaderLeft, HeaderRight, Box, ProfilePhoto, ImageWrapper } from './styles'

import LogoImg from '../../assets/img/dashboard-logo.png'

const DashboardHeader = () => (
  <Header>
    <HeaderLeft>
      <Box leftBorder>
        <ImageWrapper>
          <img src={LogoImg} />
        </ImageWrapper>
      </Box>
      <Box leftBorder><i className="fab fa-trello rightMargin" /> Boards</Box>
      <Box>
        <input type="search" name="search" />
      </Box>
    </HeaderLeft>
    <HeaderRight>
      <Box><i className="fas fa-plus" /></Box>
      <Box><i className="far fa-bell" /></Box>
      <ProfilePhoto></ProfilePhoto>
    </HeaderRight>
  </Header>
)


export default DashboardHeader
