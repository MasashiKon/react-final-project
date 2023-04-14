import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
    isClicked: boolean
}

export const StyledExerciseContainer = styled(motion.div)<Props>`
    width: 200px;
    height: 100px;
    background-color: ${(props) => (props.isClicked ? "#8FF092" : "#F47777")};
    padding: 20px 0 0 0 ;
    text-align: center;

    @media (min-width: 576px) {

    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {
        
    }
`;