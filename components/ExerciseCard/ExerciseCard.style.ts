import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
    $isclicked: boolean
}

export const StyledExerciseCardContainer = styled(motion.div)<Props>`
    width: 200px;
    height: 100px;
    background-color: ${(props) => (props.$isclicked ? "#4B4E6D" : "#84DCC6")};
    text-align: center;
    border-radius: 5%;
    line-height: 100px;

    color: #222222;
    @media (min-width: 576px) {

    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {
        
    }
`;