import { useState } from 'react'

import { useRouter } from 'next/router'
import { useStore } from '../../lib/store'

import { User } from '../../lib/slice/createUserSlice'

import { StyledExerciseContainer } from './Exercise.style'
import Button from '../Button/Button'

import { MongoClient } from 'mongodb'

function Exercise({testUpdate}) {
    // const didToday: boolean = useStore((state: User) => state.didToday);
    // const toggle = useStore((state: User) => state.toggleToTrue)
    const name: string = useStore((state: User) => state.name)
    // const name: string = useStore((state: User) => state.name)
    const identifier: string = useStore((state: User) => state.identifier);
    const streak: number = useStore((state: User) => state.streak)
    const updateStreak = useStore((state: User) => state.updateStreak)

    const updateUser = async ({identifier, streak, name}) => {                
        const test = await updateStreak({identifier, streak, name})
    }

    return (
        <StyledExerciseContainer>
            Finish today's exercise?: 
            <button onClick={() => updateUser({identifier, streak, name})}>Finish exercise</button>
            <p>steak: {streak}</p>
        </StyledExerciseContainer>
    )
}

export default Exercise