import React, { useEffect } from 'react'

import { StyledMainContainer } from './Main.style'
import Exercise from '../Exercise/Exercise'
import ExerciseCard from '../ExerciseCard/ExerciseCard'

import { getSession } from 'next-auth/react'

import { useStore } from '../../lib/store'
import { User } from '../../lib/slice/createUserSlice'

import { StyledMainBackground } from './MainBackground.style'

import { ClipLoader } from 'react-spinners'

const dummyArr = [
    {name: 1},
    {name: 2},
    {name: 3},
]

function Main() {
  const isLoaded = useStore((state: User) => state.isLoaded);
  const lessons = useStore(state => state.lessons);
  const loadLessons = useStore((state: User) => state.loadLessons)

  const course = useStore((state: User) => state.course)  

  useEffect(() => {
    loadLessons();
  }, [])


  return ( isLoaded ? (
    <StyledMainContainer>
      {
        lessons?.map((ele, index) => {
          
          return <ExerciseCard dummyName={ele.name} key={ele.name} isDone={course[`exercise${index + 1}`]?.isDone ? course[`exercise${index + 1}`].isDone : false}/>
        })
      }
    </StyledMainContainer>) 
    : (
      <StyledMainBackground>
        <ClipLoader />
      </StyledMainBackground>
    )

  )
}

export default Main