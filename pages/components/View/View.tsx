import React from 'react'
import { StyledViewContainer } from './View.style'

import Status from '../Status/Status'
import SideBar from '../SideBar/SideBar'

function View() {
  return (
    <StyledViewContainer>
        <Status />
        <SideBar />
    </StyledViewContainer>
  )
}

export default View