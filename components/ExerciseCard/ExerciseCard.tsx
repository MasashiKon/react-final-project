import { useState } from 'react'

import { StyledExerciseCardContainer } from './ExerciseCard.style' 
import Button from '../Button/Button'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { log } from 'console'

import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

const dummyArr = [
    {name: "exercise1"},
    {name: "exercise2"}
]

function ExerciseCard({dummyName, isDone}) {
    const [isclicked, setIsclicked] = useState(false)

    const handleClick = () => {
        setIsclicked(!isclicked);
    }

    return (
        <Link href={`/exercise/${dummyName.match(/\d+/)}`} className='link'>
            <StyledExerciseCardContainer onClick={handleClick} $isclicked={isDone} initial={{ opacity: 0, borderRadius: "50%" }} animate={{ opacity: 1, borderRadius: "5%" }} whileTap={{scale: 1.2}} className={"exerciseCard"}>
                {dummyName}
            </StyledExerciseCardContainer>
        </Link>
    )
}

export default ExerciseCard