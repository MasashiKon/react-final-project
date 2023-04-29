import styled from "styled-components";
import { motion } from "framer-motion";

export const StyleSidebarContainer = styled(motion.div)`
    color: #222222;
    background-color: #95A3B3;
    height: 100vh;
    width: 10vw;

    li {
        list-style: none;
    }

    @media (min-width: 576px) {

    }

    @media (min-width: 768px) {
        flex-direction: column;
    }

    @media (min-width: 992px) {
        font-size: 20px;
        width: 20vw;
    }

    @media (min-width: 1200px) {
        
    }
`;