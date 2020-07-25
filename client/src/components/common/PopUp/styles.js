import styled from 'styled-components'

export const Container = styled.div`
  width: 250px;
  height: auto;
  padding: 0 15px;
  background: rgb(230, 230, 230);
  border-radius: 4px;
  position: absolute;
  z-index: 1;
  top: 4px;
`

export const Header = styled.div`
  padding: 10px 0;  
  display: flex;
  align-items: center;
  position: relative;  
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`

export const Title = styled.span`
  display: inline-block;
  font-size: 14px;
`

export const CloseIcon = styled.span`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  i {
    color: #4a4a4a;
  }
`

export const Content = styled.div`
  padding: 10px 0;
`
