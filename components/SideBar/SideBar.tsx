import { StyleSidebarContainer } from "./Sidebar.style";

import React from 'react'

function SideBar() {
  return (
    <StyleSidebarContainer>
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
      </ul>
    </StyleSidebarContainer>
  )
}

export default SideBar