import { StyleSidebarContainer } from "./Sidebar.style";

import React from 'react'

import { useSession, signIn, signOut } from "next-auth/react"
import { motion } from "framer-motion";

function SideBar() {
  const { data: session, status } = useSession()

  return (
    <StyleSidebarContainer layout initial={{width: "0"}} animate={{width: "20vw"}}>
      {
        status === "authenticated" ? (
            <motion.ul layout initial={{x: "-100px", opacity: 0}} animate={{x: "0", opacity: 1}}>
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
                    <button onClick={() => signOut()}>Sign out</button>
                  </>
              </li>
            </motion.ul>
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