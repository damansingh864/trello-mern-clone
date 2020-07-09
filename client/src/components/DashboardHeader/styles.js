import styled, { css } from 'styled-components'

export const Header = styled.div`
  /* background: #3c7886; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 12px; 
  border-bottom: 1px solid rgba(150,150,150,0.3);
`

export const ImageWrapper = styled.div`
  height: 25px;
  width: auto;
  background: #1a1a1a;
  border-radius: 5px;
  overflow: hidden;
  
  img {
    height: 100%;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`

export const Box = styled.div`
  height: 100%;
  width: auto;
  margin-right: 25px;
  font-size: 14px;
  display: flex;
  align-items: center;

  .rightMargin {
    margin-right: 10px;
  }

  ${({ leftBorder }) => leftBorder && css`
    border-right: 1px solid rgba(150,150,150,0.5);
    padding: 0 15px;
    margin-right: 0;
  `}

  input {
    margin-left: 18px;
    background-color: #f4f4f4;
    border-radius: 10px;
    border: 0;
    display: inline-block;
    height: 100%;
    width: 350px;    
  }
`

export const ProfilePhoto = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: orange;
`
