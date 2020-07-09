import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
`

export const Section = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`

export const Header = styled.div`
  margin-bottom: 15px;
  font-weight: bold;
  color: #4a4a4a;

  i {
    font-size: 20px;
    margin-right: 10px;
    margin-left: 5px;
  }
`

export const Content = styled.div`
  display: flex;
`

export const CreateBoardBtn = styled.div`
  background: rgba(20,20,37,0.06);
  border-radius: 4px;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  font-size: 14px;
  transition: all .2s ease;

  :hover {
    cursor: pointer;
    background: rgba(20,20,37,0.1);
    transition: all .2s ease;
  }

`

