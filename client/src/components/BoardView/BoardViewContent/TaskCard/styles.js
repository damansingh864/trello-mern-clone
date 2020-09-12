import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 100%;
  background: #eee;
  /* align-items: center; */
  border-radius: 8px;
  padding: 15px 15px;  
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  }
`

export const ImageWrap = styled.div`
  border: 1px solid #555;
  height: 110px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
  background: #555;
`

export const Title = styled.div`
  font-size: 14px;
  color: #444;
  font-weight: 600;
  margin-bottom: 10px;
`

export const Description = styled.div`
  font-size: 12px;
  color: #888;
  margin-bottom: 18px;
`

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TeamList = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #444;
`

export const CardActivity = styled.div`
`

export const IconWrap = styled.span`
  font-size: 12px;
  color: #aaa;
  margin-left: 10px;
`
