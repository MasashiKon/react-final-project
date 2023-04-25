import styled from 'styled-components'

import Main from '../components/Main/Main'
import { useSession } from 'next-auth/react'
import { use, useEffect } from 'react';
import { useStore } from '../lib/store';

import { User } from '../lib/slice/createUserSlice';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  const {status, data} = useSession();  

  const setUserInfo = useStore((state: User) => state.setUserInfo)
  const setIsLoading = useStore((state: User) => state.setIsLoading)
  const isLoading = useStore((state: User) => state.isLoading)  
  const userName = useStore((state: User) => state.name)
  
  useEffect(() => {
    const getUserInfo =  async () => {
      if(status === "authenticated" && userName === "") {
        try {
          const {name, email} = data.user;
          setIsLoading(true);
          const res = await fetch("/api/get-user-status", {
            method: "POST",
            body: JSON.stringify({name, email}),
            headers: {
              'Content-Type': 'application/json'
            }
          })          
          
          const user = await res.json();
          
          setUserInfo({...user, authentication: status});
                    
          setIsLoading(false)
        } catch(err) {
          console.error(err)
        }
      }
    }

    getUserInfo()

  }, [status])
  
  return (
    <Main />
  )
}
