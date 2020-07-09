import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Logo, NavigationAccess, Button } from './styles'
import {ReactComponent as LogoSvg } from '../../assets/img/logo.svg'

const HomeHeader = ({ onView }) => (
  <Header>
    <Logo><LogoSvg /></Logo>
    <NavigationAccess>
      <Button onClick={() => onView('signIn')}>
        <Link to="/signIn">
          Log In
        </Link> 
      </Button>
      <Button alter onClick={() => onView('signUp')}>
        <Link to="/signUp">
          Sign Up
        </Link>
      </Button>
    </NavigationAccess>
  </Header>
)

export default HomeHeader
