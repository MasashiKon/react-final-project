import { useState } from 'react'

import { StyledExerciseCardContainer } from './ExerciseCard.style' 
import Button from '../Button/Button'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { log } from 'console'

const dummyArr = [
    {name: "exercise1"},
    {name: "exercise2"}
]

function ExerciseCard({dummyName}) {
    const [isclicked, setIsclicked] = useState(false)

    

    const handleClick = () => {
        setIsclicked(!isclicked);
    }

    return (
        <Link href="/exercise/1">
            <StyledExerciseCardContainer onClick={handleClick} $isclicked={isclicked} whileTap={{scale: 1.2}} className={"exerciseCard"}>
                {}
            </StyledExerciseCardContainer>
        </Link>

    )
}

export default ExerciseCard