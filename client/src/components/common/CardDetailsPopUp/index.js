import React from 'react'

import Input from '../../common/Input'

import {
  PopUp, Wrapper, TopWrapper, CrossIcon, TitleWrapper, Section, Tagline, Members, IconWrap,
  InSectionHead, ContentWrapper, LeftWrapper, MembersList, DescriptionBox, AttachmentsBox, ActivityBox,
  SectionTitle, TitleWrap, SidebarWrapper, SidebarActions, ActionWrap
} from './styles'

const CardDetailsPopUp = () => {
  return (
    <PopUp>
      Daman
      <Wrapper>
         <TopWrapper>
            <TitleWrapper>
              <IconWrap><i class="far fa-credit-card" /></IconWrap>
              <Input
                classStyle="edit-hide"
              />
            </TitleWrapper>
            <Section noBottomMargin>
              <Tagline>in list Todo</Tagline>              
            </Section>
            <CrossIcon><i class="fas fa-times" /></CrossIcon>
        </TopWrapper>
        
       <ContentWrapper>          
          <LeftWrapper>
            <Section>
              <Members>
                <InSectionHead>Members</InSectionHead>
                <MembersList>
                  
                </MembersList>
              </Members>
            </Section>
            <DescriptionBox>
              <SectionTitle>
                <IconWrap><i className="fas fa-stream"></i></IconWrap>
                <TitleWrap>Description</TitleWrap>
              </SectionTitle>
              <Section>
                Damanvir SIngh
              </Section>
            </DescriptionBox>
            <AttachmentsBox>
              <SectionTitle>
                <IconWrap><i className="fas fa-paperclip" /></IconWrap>
                <TitleWrap>Attachments</TitleWrap>
              </SectionTitle>
              <Section>
                Damanvir SIngh
              </Section>
            </AttachmentsBox>
            <ActivityBox>
              <SectionTitle>
                <IconWrap><i className="fas fa-th-list" /></IconWrap>
                <TitleWrap>Activity</TitleWrap>
              </SectionTitle>
              <Section>
                Damanvir SIngh
              </Section>
            </ActivityBox>            
          </LeftWrapper>
           <SidebarWrapper>
           <InSectionHead>Add to Card</InSectionHead>
           <SidebarActions>
              <ActionWrap><i className="far fa-user" /> Members</ActionWrap>
              <ActionWrap><i className="fas fa-paperclip" /> Attachment</ActionWrap>
              <ActionWrap><i className="far fa-image" /> Cover</ActionWrap>
            </SidebarActions>
          </SidebarWrapper>
        </ContentWrapper>
      </Wrapper>
    </PopUp>
  )
}

export default CardDetailsPopUp
