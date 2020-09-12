import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: auto;

  .descriptionBox {
    padding: 0;
    background: transparent;

    &> div {
      border-radius: 4px;
      box-shadow: initial;      

      textarea {
        background: #eee;
      }      
    }

    textarea:focus {
      background: #eee;
    }
  }
`

export const BoxWrap = styled.div`
  border-radius: 4px;
  width: 100%;
  height: 60px;
  background: #f5f5f5;
  padding: 10px;
  color: #444;
  font-size: 14px;

  &:hover {
    background-color: #eee;
    cursor: pointer;
  }  
`


