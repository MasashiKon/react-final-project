import { useState } from 'react'

import { StyledExerciseCardContainer } from './ExerciseCard.style' 
import Button from '../Button/Button'

const dummyArr = [
    {name: "exercise1"},
    {name: "exercise2"}
]

function ExerciseCard({dummyName}) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (

        <StyledExerciseCardContainer onClick={handleClick} isClicked={isClicked} whileTap={{scale: 1.2}}>
            {dummyName}
        </StyledExerciseCardContainer>
    )
}

export default ExerciseCard