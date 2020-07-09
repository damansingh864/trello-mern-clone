import styled, { css } from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
`

export const Logo = styled.div`
  width: 100px;
  height: auto;
`

export const NavigationAccess = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.div`
  padding: 2px;

  a {
    color: white;
    text-decoration: none;
    padding: 3px 7px;
    display: inline-block;
  }  

  ${({ alter }) => alter && css`
    margin-left: 7px;
    border-radius: 3px;
    background: white;
    
    a {    
      color: #3c7886;
    }

    &:hover {
      box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.2);
      transform: scale(1.02);
      transition: all 0.1s ease-in;
    }
  `}

  transition: all 0.1s ease-in;
`
