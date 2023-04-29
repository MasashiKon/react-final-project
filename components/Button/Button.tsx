import React from 'react'

import { StyledButton } from './Button.style'

function Button({text, handleClick}) {
  return (
    <StyledButton onClick={() => handleClick()}>{text}</StyledButton>
  )
}

export default Button