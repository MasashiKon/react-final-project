import React from 'react'
import { StyledViewContainer } from './View.style'

import Status from '../Status/Status'
import SideBar from '../SideBar/SideBar'
import Main from '../Main/Main'

function View({children}) {
  console.log(children);
  
  return (
    <StyledViewContainer>
        <Status />
          {children}
        <SideBar />
    </StyledViewContainer>
  )
}

export default View