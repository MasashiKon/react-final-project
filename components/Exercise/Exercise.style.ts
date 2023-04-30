import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledExerciseContainer = styled(motion.div)`
    width: 60vw;
    height: 100vh;
    padding: 20px 0 0 0 ;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    background-color: #FFFFFF;

    @media (max-width: 576px) {
        width: 100vw;
        height: 90vh;
        padding: 0;
    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {
        
    }
`;