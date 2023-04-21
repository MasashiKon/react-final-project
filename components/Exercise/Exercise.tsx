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
    const id: number = useStore((state: User) => state.id)
    const streak: number = useStore((state: User) => state.streak)
    const updateStreak = useStore((state: User) => state.updateStreak)

    const updateUser = async ({id, streak}) => {
        const test = await updateStreak({id, streak})
    }

    return (
        <StyledExerciseContainer>
            Finish today's exercise?: 

            <button onClick={() => updateUser({id, streak})}>Finish exercise</button>
            <p>steak: {streak}</p>
        </StyledExerciseContainer>
    )
}

export default Exercise