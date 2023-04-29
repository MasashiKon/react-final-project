import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledStatusContainer = styled(motion.div)`
    color: #222222;
    background-color: #95A3B3;
    height: 100vh;
    width: 20vw;
    
    li {
        list-style: none;
        font-size: 20px;
    }

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