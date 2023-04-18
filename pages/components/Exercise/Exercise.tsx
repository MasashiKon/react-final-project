import { useState } from 'react'

import { useStore } from '../../../lib/store'

import { User } from '../../../lib/slice/createUserSlice'

import { StyledExerciseContainer } from './Exercise.style'
import Button from '../Button/Button'

function Exercise() {
    const didToday: boolean = useStore((state: User) => state.didToday);
    const toggle = useStore((state: User) => state.toggleToTrue)

    return (
        <StyledExerciseContainer>
            Finish today's exercise?: {String(didToday)}

            <button onClick={toggle}>Finish exercise</button>
        </StyledExerciseContainer>
    )
}

export default Exercise