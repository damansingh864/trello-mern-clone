import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header, HeaderLeft, HeaderRight, Box, ProfilePhoto, ImageWrapper } from './styles'

import LogoImg from '../../assets/img/dashboard-logo.png'
import { addPopUp } from '../../redux/Dashboard/actions'
import { memoizedDashboardHeader } from '../../redux/Dashboard/selectors'

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const { toggleAddPopUp } = useSelector(memoizedDashboardHeader)

  return (
    <Header>
      <HeaderLeft>
        <Box leftBorder>
          <ImageWrapper>
            <img src={LogoImg} />
          </ImageWrapper>
        </Box>
        <Box onClick={() => dispatch(addPopUp(!toggleAddPopUp, 'left'))} leftBorder><i className="fab fa-trello rightMargin" /> Boards</Box>
        <Box>
          <input type="search" name="search" />
        </Box>
      </HeaderLeft>
      <HeaderRight>
        <Box onClick={() => dispatch(addPopUp(!toggleAddPopUp, 'right'))}><i className="fas fa-plus" /></Box>
        <Box onClick={() => dispatch(addPopUp(!toggleAddPopUp, 'right'))}><i className="far fa-bell" /></Box>
        <ProfilePhoto />
      </HeaderRight>
    </Header>
  )
}

export default DashboardHeader
