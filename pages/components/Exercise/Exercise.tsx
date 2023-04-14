import { useState } from 'react'

import { StyledExerciseContainer } from './Exercise.style'
import Button from '../Button/Button'

const dummyArr = [
    {name: "exercise1"},
    {name: "exercise2"}
]

function Exercise({dummyName}) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (

        <StyledExerciseContainer onClick={handleClick} isClicked={isClicked} whileTap={{scale: 1.2}}>
            {dummyName}
        </StyledExerciseContainer>
    )
}

export default Exercise