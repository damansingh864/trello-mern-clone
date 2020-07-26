import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Wrapper, Content } from './styles'
import { useSelector } from 'react-redux'

import Header from '../../components/DashboardHeader'
import DashboardHome from '../DashboardHome'
import AddPopUp from '../../components/AddPopUpContent'
import Board from '../../components/BoardView'
import { memoizedPopUpData } from '../../redux/Dashboard/selectors'

const Dashboard = () => {
  const { popUpDirection, toggleAddPopUp } = useSelector(memoizedPopUpData)

  return (
    <Wrapper>
      <Header />
      <Content>
        <Switch>
          <Route path="/dashboard/board" exact component={Board} />
          <Route path="/dashboard" component={DashboardHome} />
        </Switch>
        {/* <DashboardHome /> */}
        {toggleAddPopUp && <AddPopUp direction={popUpDirection} />}
      </Content>
    </Wrapper>
  )
}

export default Dashboard
