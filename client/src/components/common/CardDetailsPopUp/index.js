import React from 'react'

import {
  PopUp, Wrapper, TopWrapper, TitleWrapper, Section, Tagline, Members, IconWrap
} from './styles'

const CardDetailsPopUp = () => {
  return (
    <PopUp>
      Daman
      <Wrapper>
         <TopWrapper>
            <TitleWrapper>
              <IconWrap><i class="far fa-credit-card" /></IconWrap>
            </TitleWrapper>
            <Section>
              <Tagline></Tagline>
              <Members></Members>
            </Section>            
        </TopWrapper>
        {/*<ContentWrapper>
          <LeftWrapper>
            <DescriptionBox></DescriptionBox>
            <AttachmentsBox></AttachmentsBox>
            <ActivityBox></ActivityBox>
          </LeftWrapper>
          <SidebarWrapper>
            <SideTitleBox>Add to Card</SideTitleBox>
            <SidebarActions>
              <ActionWrap>Members</ActionWrap>
              <ActionWrap>Attachment</ActionWrap>
              <ActionWrap>Cover</ActionWrap>
            </SidebarActions>
          </SidebarWrapper>
        </ContentWrapper> */}
      </Wrapper>
    </PopUp>
  )
}

export default CardDetailsPopUp
