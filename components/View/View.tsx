import React from 'react'
import { StyledViewContainer } from './View.style'

import Status from '../Status/Status'
import SideBar from '../SideBar/SideBar'
import Main from '../Main/Main'

function View({children}) {  
  return (
    <StyledViewContainer>
        <SideBar />
          {children}
        <Status />
    </StyledViewContainer>
  )
}

export default View