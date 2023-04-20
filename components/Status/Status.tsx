import React from 'react'
import { StyledStatusContainer } from './Status.style'

function Status() {
  return (
    <StyledStatusContainer>
      <ul>
        <li>
          streak
        </li>
        <li>
          exp
        </li>
        <li>
          week goal
        </li>
      </ul>
    </StyledStatusContainer>
  )
}

export default Status