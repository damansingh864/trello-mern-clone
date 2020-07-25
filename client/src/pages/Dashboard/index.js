import React from 'react'
import { Wrapper, Content } from './styles'
import { useSelector } from 'react-redux'

import Header from '../../components/DashboardHeader'
import DashboardHome from '../DashboardHome'
import AddPopUp from '../../components/AddPopUpContent'
import { memoizedPopUpData } from '../../redux/Dashboard/selectors'

const Dashboard = () => {
  const { popUpDirection } = useSelector(memoizedPopUpData)

  return (
    <Wrapper>
      <Header />
      <Content>
        <DashboardHome />
        <AddPopUp direction={popUpDirection} />
      </Content>
    </Wrapper>
  )
}

export default Dashboard
