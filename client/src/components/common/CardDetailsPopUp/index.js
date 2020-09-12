import React from 'react'

import Input from '../../common/Input'
import Description from './DescriptionBox'
import Attachments from './Attachments'
import Activity from './Activity'
import MembersShow from './MembersShow'

import {
  PopUp, Wrapper, TopWrapper, CrossIcon, TitleWrapper, Section, Tagline, Members, IconWrap,
  InSectionHead, ContentWrapper, LeftWrapper, MembersList, DescriptionBox, AttachmentsBox, ActivityBox,
  SectionTitle, TitleWrap, SidebarWrapper, SidebarActions, ActionWrap, ActivityWrap
} from './styles'

const CardDetailsPopUp = () => {
  return (
    <PopUp>
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
                  <MembersShow />
                  <MembersShow />
                  <MembersShow />
                </MembersList>
              </Members>
            </Section>
            <DescriptionBox>
              <SectionTitle>
                <IconWrap><i className="fas fa-stream"></i></IconWrap>
                <TitleWrap>Description</TitleWrap>
              </SectionTitle>
              <Section>
                <Description />
              </Section>
            </DescriptionBox>
            <AttachmentsBox>
              <SectionTitle>
                <IconWrap><i className="fas fa-paperclip" /></IconWrap>
                <TitleWrap>Attachments</TitleWrap>
              </SectionTitle>
              <Section>
                <Attachments />
                {/* <Attachments />
                <Attachments />
                <Attachments /> */}
              </Section>
            </AttachmentsBox>
            <ActivityBox>
              <SectionTitle>
                <IconWrap><i className="fas fa-th-list" /></IconWrap>
                <TitleWrap>Activity</TitleWrap>
              </SectionTitle>
              <ActivityWrap>
                <Activity />              
              </ActivityWrap>
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
