import { StyleSidebarContainer } from "./Sidebar.style";

import React from 'react'

import { useSession, signIn, signOut } from "next-auth/react"

function SideBar() {
  const { data: session, status } = useSession()

  return (
    <StyleSidebarContainer>
      {
        status === "authenticated" ? (
            <ul>
              <li>
                home
              </li>
              <li>
                use page
              </li>
              <li>
                setting
              </li>
              <li>
                  <>
                    Signed in as {session.user.email} <br />
                    <button onClick={() => signOut()}>Sign out</button>
                  </>
              </li>
            </ul>
        ) : (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )         
      }
      
    </StyleSidebarContainer>
  )
}

export default SideBar