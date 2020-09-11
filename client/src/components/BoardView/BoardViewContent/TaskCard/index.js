import React from 'react'

import { Wrapper, Title, Description, CardBottom, TeamList, CardActivity, IconWrap, ImageWrap } from './styles'

const data = [
  {
    name: 'Old fashioned recipe for preventing allergies and chemicals',
    image: 'ad',
    description: "This is our Description",    
    activity: {
      comments: 42,
      favorites: 20,
      attachments: 10
    }
  }
]

const TaskCard = () => {
  return (
    <Wrapper draggable>
      {data[0].image && <ImageWrap></ImageWrap>}
      <Title>{data[0].name}</Title>
      {data[0].description && <Description>{data[0].description}</Description>}
      <CardBottom>
        <TeamList>
        </TeamList>
        <CardActivity>
          {data[0].activity.comments && <IconWrap>{data[0].activity.comments} <i class="far fa-heart" /></IconWrap>}
          {data[0].activity.favorites && <IconWrap>{data[0].activity.favorites} <i class="far fa-comment-dots" /></IconWrap>}
          {data[0].activity.attachments && <IconWrap>{data[0].activity.attachments} <i class="fas fa-paperclip" /></IconWrap>}
        </CardActivity>
      </CardBottom>
    </Wrapper>
  )
}

export default TaskCard
