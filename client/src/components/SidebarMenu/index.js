import React from 'react'

import { withRouter, NavLink } from 'react-router-dom'
import { Menu, SidebarWrap } from './styles'

const menu = [
  {
    name: 'Boards',
    icon: 'fab fa-trello',
    active: '/dashboard/boards',
    visit: '/boards'
  },
  {
    name: 'Templates',
    icon: 'fas fa-object-group',
    active: '/dashboard/templates',
    visit: '/templates'
  },
  {
    name: 'Home',
    icon: 'fas fa-home',
    active: '/dashboard',
    visit: ''
  }
]

const SidebarMenu = (props) => (
  <SidebarWrap>
    {console.log(props)}
    {menu.map(itm => (
      <Menu key={itm.name} to={`${props.match.url}${itm.visit}`} active={props.location.pathname === itm.active}>
        <i className={itm.icon} /> {itm.name}
      </Menu>
    ))}    
  </SidebarWrap>
)

export default withRouter(SidebarMenu)
