import styled, { css } from 'styled-components'

export const PopUp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: 'center';
  justify-content: center;
  padding-top: 70px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 300;
`

export const Wrapper = styled.div`
  width: 700px;
  height: auto;
  background: white;
  border-radius: 8px;
`

export const TopWrapper = styled.div`
  /* border: 1px solid red; */
  padding: 20px 20px 10px;
  position: relative;
`

export const CrossIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
  /* background: rgba(0, 0, 0, 0.2); */
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #444;
`

export const TitleWrapper = styled.div`
  display: flex;
  width: 90%;
  align-items: center;

  .edit-hide {
    border-radius: 3px;
    box-shadow: none;
    overflow: initial;    

    & > input {
      font-size: 18px;
      font-weight:  600;
    }

    & > input:focus { 
      background: #eee;
      font-size: 18px;
      font-weight:  600;
    }
  }
`

export const IconWrap = styled.div`
  margin-right: 15px;
`

export const Section = styled.div`
  padding-left: 40px;
  margin-top: 8px;
  /* border: 1px solid orange; */
  height: auto;
  margin-bottom: 20px;

  ${({ noBottomMargin }) =>  noBottomMargin && css`
    margin-bottom: 0;
  `}
`

export const Tagline = styled.div`
  font-size: 12px;
`

export const Members = styled.div`
  /* margin-top: 12px; */
`

export const InSectionHead = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: #444;
  letter-spacing: .8px;
`

export const ContentWrapper = styled.div`
  display: flex;
`

export const LeftWrapper = styled.div`
  padding: 0 20px;
  flex: 1;
`

export const MembersList = styled.div`
  margin-top: 8px;
  display: flex;

  & > div {
    margin-right: 6px;
  }
`

export const DescriptionBox = styled.div`
  margin-top: 15px;  
`

export const AttachmentsBox = styled.div`
  margin-top: 15px;  
`

export const ActivityBox = styled.div`
  margin-top: 15px;  
`

export const SectionTitle = styled.div`
  display: flex;
`

export const TitleWrap = styled.div`
  margin-left: 10px;
`

export const SidebarWrapper = styled.div`
  width: 25%;
  /* border: 1px solid red; */
  padding: 0px 20px 20px 0; 
`

export const SidebarActions = styled.div`
  padding-top: 15px;
`

export const ActionWrap = styled.div`
  width: 100%;
  padding: 6px 10px;
  background: #eee;
  color: #444;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 14px;

  & > i {
    margin-right: 8px;
    font-size: 13px;
  }

  &:hover {
    background: #ddd;
    cursor: pointer;
  }
`

export const ActivityWrap = styled.div`
  padding: 15px 0;
`