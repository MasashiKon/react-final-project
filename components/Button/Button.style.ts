import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
    background-color: #4B4E6D;
    color: #FFFFFF;
    border: none;
    position: relative;
    top: -40%;
    left: -35%;

    width: 100px;
    height: 50px;

    border-radius: 5%;

    @media (max-width: 576px) {
        top: -35%;
    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {
        
    }
`;