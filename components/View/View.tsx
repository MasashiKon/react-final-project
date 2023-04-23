import React from 'react'
import { StyledViewContainer } from './View.style'

import Status from '../Status/Status'
import SideBar from '../SideBar/SideBar'
import Main from '../Main/Main'

import { useSession, signIn, signOut } from "next-auth/react"

function View({children}) {  
  const { data: session, status } = useSession()
  // console.log("kore:", session);
  
  return (
    <StyledViewContainer>
        <SideBar />
          {session ? (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    ) : (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )}
          {children}
        <Status />
    </StyledViewContainer>
  )
}

export default View