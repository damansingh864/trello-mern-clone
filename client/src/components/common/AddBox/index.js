import React from 'react'

import { Wrap } from './styles'

const AddBox = ({ children, toggleCard, style }) => (
  <Wrap onClick={toggleCard} style={{ ...style }}>
    {children}
  </Wrap>
)

export default AddBox