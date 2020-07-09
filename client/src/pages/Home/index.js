import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Wrapper 
} from './styles'
import { Switch, Route } from 'react-router-dom'

import Auth from '../Auth'
import Header from '../../components/HomeHeader'
import Footer from '../../components/HomeFooter'
import { toggleView } from '../../redux/Home/action'
import { memoizedHomeState } from '../../redux/Home/selector'

const Home = () => {
  const dispatch = useDispatch()
  const { view } = useSelector(memoizedHomeState)

 return (
    <Wrapper view={!view}>
      <Header onView={(view) => dispatch(toggleView(view))}/>
      <div style={{ flex: '1'}}>
        <Switch>
          <Route path="/signUp" component={Auth} />
        </Switch>
        {/* {view && <Auth />} */}
      </div>
      <Footer />
    </Wrapper>
  )
}

export default Home
