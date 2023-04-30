import styled from "styled-components";
import { motion } from "framer-motion";

import { StyledExerciseCardContainer } from "../ExerciseCard/ExerciseCard.style";

export const StyledMainContainer = styled(motion.div)`
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #FFFFFF;

    .link {
        text-decoration: none;
    }

    ${StyledExerciseCardContainer} {
        margin: 30px;
    }

    @media (max-width: 576px) {
        width: 100vw;
        height: 90vh;
    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {
        
    }
`;