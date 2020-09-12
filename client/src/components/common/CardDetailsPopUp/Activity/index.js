import React from 'react'

import { 
  Wrapper, ActivityContent, ActivityIcon, ActivityInfo,
  Information, UserWrap, Time
} from './styles'

const Activity = () => {
  return (
    <Wrapper>
      <ActivityInfo>
        <ActivityIcon>DS</ActivityIcon>
        <ActivityContent>
          <Information>
            <UserWrap>Damanvir Singh</UserWrap>&nbsp;added this card to To Do
          </Information>
          <Time>15 hours ago</Time>
        </ActivityContent>
      </ActivityInfo>
    </Wrapper>
  )
}

export default Activity
