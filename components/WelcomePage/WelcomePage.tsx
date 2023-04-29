import React from 'react'

import { StyledWelcomePage } from './WelcomePage.style'
import SigninWIndow from '../SigninWindow/SigninWIndow'
import Button from '../Button/Button'

function WelcomePage({handleSignin}) {
  return (
    <StyledWelcomePage>
        <h1>Learning Platform</h1>
        <SigninWIndow handleSignin={handleSignin} />
    </StyledWelcomePage>
  )
}

export default WelcomePage