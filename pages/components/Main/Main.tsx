import React from 'react'

import { StyledMainContainer } from './Main.style'
import Exercise from '../Exercise/Exercise'

const dummyArr = [
    {name: "exercise1"},
    {name: "exercise2"}
]

function Main() {
  return (
    <StyledMainContainer>
    <Exercise/>
        
    </StyledMainContainer>
  )
}

export default Main