import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const SidebarWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 230px;
`

export const Menu = styled(NavLink)`
  padding: 5px 8px;
  text-decoration: none;
  color: #4a4a4a;
  font-size: 14px;
  margin-bottom: 5px;  
  border-radius: 3px;
  font-weight: 600;

  i {
    margin-right: 10px;
  }

  ${({ active }) => active && css`
    color: #3c7886;
    background: rgba(60, 120, 134, 0.2);
  `}

  &:hover {
    background: rgba(0, 0, 0, 0.07);
    color: #4a4a4a;
    cursor: pointer;
  }
`
