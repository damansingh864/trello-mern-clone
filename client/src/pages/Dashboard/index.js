import React from 'react'
import { Wrapper, Content } from './styles'

import Header from '../../components/DashboardHeader'
import DashboardHome from '../DashboardHome'

const Dashboard = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <DashboardHome />
      </Content>
    </Wrapper>
  )
}

export default Dashboard
