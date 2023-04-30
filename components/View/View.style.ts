import styled from "styled-components";
import { motion } from "framer-motion";

import { StyleSidebarContainer } from "../SideBar/Sidebar.style";
import { StyledStatusContainer } from "../Status/Status.style";

export const StyledViewContainer = styled(motion.div)`
    display: flex;
    justify-content: space-between;

    li {
        margin: 10px;
    }

    @media (max-width: 576px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        ${StyleSidebarContainer} {
            width: 100vw;
            height: 10vh;
            ul {
                display: flex;
                align-items: center;
                li {
                    margin: 0 10px;;
                }
            }
  
        }
        ${StyledStatusContainer} {
            display: none;
        }
    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {
        
    }
`