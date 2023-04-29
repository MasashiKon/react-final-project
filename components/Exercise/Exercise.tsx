import { useState } from 'react'

import { useRouter } from 'next/router'
import { useStore } from '../../lib/store'

import { User } from '../../lib/slice/createUserSlice'

import { StyledExerciseContainer } from './Exercise.style'
import Button from '../Button/Button'

import { StyledButton } from '../Button/Button.style'

import { MongoClient } from 'mongodb'

import { StyledExerciseButton } from '../Button/ExerciseButton/ExerciseButton.style'


function Exercise({testUpdate}) {
    const router = useRouter();
    const exercise = Number(router?.query.exercise);   
    // const didToday: boolean = useStore((state: User) => state.didToday);
    // const toggle = useStore((state: User) => state.toggleToTrue)
    const name: string = useStore((state: User) => state.name)
    // const name: string = useStore((state: User) => state.name)
    const identifier: string = useStore((state: User) => state.identifier);
    const streak: number = useStore((state: User) => state.streak)
    const updateStreak = useStore((state: User) => state.updateStreak)
    const isDone = useStore((state: User) => state.course[`exercise${exercise}`]?.isDone);
 
    const updateUser = async ({identifier, streak, name, exercise}) => {                
        const test = await updateStreak({identifier, streak, name, exercise})
    }

    return (
        <StyledExerciseContainer>
            <StyledButton onClick={() => router?.push('/')} whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} >Back to Home</StyledButton>
            <StyledExerciseButton initial={{borderRadius: '50%' }} whileHover={{borderRadius: '5%', rotate: "360deg"}} whileTap={{scale: 1.1}} onClick={() => updateUser({identifier, streak, name, exercise})} >{isDone ? "You've done!" : "Finish today's exercise"}</StyledExerciseButton>
        </StyledExerciseContainer>
    )
}

export default Exercise