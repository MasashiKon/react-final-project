import styled from "styled-components";
import { motion } from "framer-motion";

export const StyleSidebarContainer = styled(motion.div)`
    background-color: grey;
    height: 100vh;
    width: 10vw;

    @media (min-width: 576px) {

    }

    @media (min-width: 768px) {
        flex-direction: column;
    }

    @media (min-width: 992px) {
        width: 20vw;
    }

    @media (min-width: 1200px) {
        
    }
`;