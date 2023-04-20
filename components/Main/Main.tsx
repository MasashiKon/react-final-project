import React from 'react'

import { StyledMainContainer } from './Main.style'
import Exercise from '../Exercise/Exercise'
import ExerciseCard from '../ExerciseCard/ExerciseCard'

const dummyArr = [
    {name: "exercise1"},
    {name: "exercise2"}
]

function Main() {
  return (
    <StyledMainContainer>
    <ExerciseCard dummyName={"test"}/>
    </StyledMainContainer>
  )
}

export default Main