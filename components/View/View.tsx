import React from 'react'
import { StyledViewContainer } from './View.style'

import { useSession, signIn, signOut } from 'next-auth/react'

import { useRouter } from 'next/navigation'

import Status from '../Status/Status'
import SideBar from '../SideBar/SideBar'
import Main from '../Main/Main'

function View({children}) {  

  const {status} = useSession()
  const router = useRouter()
  
  return (
    status === 'authenticated' ? (
      <StyledViewContainer>
        <SideBar />
          {children}
        <Status />
      </StyledViewContainer>
      ) : (
        children
      )
  )
}

export default View