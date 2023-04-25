import React from 'react'
import { StyledStatusContainer } from './Status.style'

import { useStore } from '../../lib/store'
import { User } from '../../lib/slice/createUserSlice'

import { useSession } from 'next-auth/react'

import { ClipLoader } from 'react-spinners'

function Status() {
  const {status, data: session} = useSession();
  const {didToday, streak, isLoading} = useStore((state: User) => ({didToday: state.didToday, streak: state.streak, isLoading: state.isLoading}))  

  return (
    <StyledStatusContainer>
      {status === "authenticated" ? (
        isLoading ? (        
          <ClipLoader />
        ) : (
          <ul>
            <li>
              streak: {streak}
            </li>
            <li>
              exp
            </li>
            <li>
              week goal
            </li>
          </ul>
        )
      ) : (
        <p>nanka kawaii e</p>
      )}

    </StyledStatusContainer>
  )
}

export default Status