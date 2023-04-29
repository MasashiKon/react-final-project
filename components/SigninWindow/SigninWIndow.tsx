import React from 'react'

import { StyledSigninWindow } from './SigninWindow.style'
import Button from '../Button/Button'

function SigninWIndow({handleSignin}) {
  return (
    <StyledSigninWindow>
        <Button handleClick={handleSignin} text={"Sign In / Sign Up"} />
    </StyledSigninWindow>
  )
}

export default SigninWIndow