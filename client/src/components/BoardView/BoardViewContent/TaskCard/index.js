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

const TaskCard = ({ name, image, description, activity, togglePopUp }) => {
  return (
    <Wrapper draggable onClick={togglePopUp}>
      {image && <ImageWrap></ImageWrap>}
      <Title>{name}</Title>
      {description && <Description>{description}</Description>}
      <CardBottom>
        <TeamList>
        </TeamList>
        <CardActivity>
          {activity.comments && <IconWrap>{activity.comments} <i class="far fa-comment-dots" /></IconWrap> || ''}
          {/* {activity.favorites && <IconWrap>{activity.favorites} <i class="far fa-comment-dots" /></IconWrap> || ''} */}
          {activity.attachments && <IconWrap>{activity.attachments} <i class="fas fa-paperclip" /></IconWrap> || ''}
        </CardActivity>
      </CardBottom>
    </Wrapper>
  )
}

export default TaskCard
