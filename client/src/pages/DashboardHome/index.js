import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Wrapper, ContentWrapper, MainSection } from './styles'
import SidebarMenu from '../../components/SidebarMenu'
import MainContent from '../../components/MainContent'
import BoardContent from '../../components/BoardContent'

import PopUp from '../../components/common/PopUp'

const DashboardHome = () => (
  <Wrapper>
    <ContentWrapper>
      <SidebarMenu />
      <MainSection>
        <PopUp />
        <Switch>
          <Route path="/dashboard" exact component={MainContent} />
          <Route path="/dashboard/boards" component={BoardContent} />
        </Switch>
        {/* <MainContent /> */}
        {/* <BoardContent /> */}
      </MainSection>
    </ContentWrapper>
  </Wrapper>
)

export default DashboardHome
