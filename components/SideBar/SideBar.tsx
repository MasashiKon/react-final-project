import { StyleSidebarContainer } from "./Sidebar.style";

import React from 'react'

import { useSession, signIn, signOut } from "next-auth/react"
import { motion } from "framer-motion";

import { StyledCommonButton } from "../Button/CommonButton.style";

function SideBar() {
  const { data: session, status } = useSession()

  return (
    <StyleSidebarContainer>
      {
        status === "authenticated" ? (
            <motion.ul layout initial={{x: "-100px", opacity: 0}} animate={{x: "0", opacity: 1}}>
              <li>
                Home
              </li>
              <li>
                Use Page
              </li>
              <li>
                Setting
              </li>
              <li>
                  <StyledCommonButton whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} onClick={() => signOut()}>Sign out</StyledCommonButton>
              </li>
            </motion.ul>
        ) : (
          <>
            Not signed in <br />
            <StyledCommonButton whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} onClick={() => signIn()}>Sign in</StyledCommonButton>
          </>
        )         
      }
      
    </StyleSidebarContainer>
  )
}

export default SideBar