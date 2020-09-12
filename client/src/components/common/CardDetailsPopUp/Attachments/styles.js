import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const ImageWrap = styled.div`
  height: 70px;
  width: 110px;
  border-radius: 4px;
  background: #444;
`

export const AttachmentInfo = styled.div`
  padding-left: 15px;
  flex: 1;
`

export const Title = styled.div`
  font-weight: bold;
  color: #444;  
  margin-bottom: 3px;
  color: #666;
  font-size: 14px;
`

export const ActionContainer = styled.div`
  margin-bottom: 6px;
  display: flex;
  font-size: 12px;
  color: #666;
`

export const CoverAction = styled.div`
  display: flex;
  font-size: 13px;
  color: #666;
  align-items: center;

  & > i {
    margin-right: 5px;
  }
`

export const Time = styled.div`
  margin-right: 3px;
`

export const Actions = styled.div`
  text-decoration: underline;
  margin: 0 3px;
`
