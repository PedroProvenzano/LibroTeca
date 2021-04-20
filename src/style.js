import styled from "styled-components";
import { motion } from "framer-motion";

// Styled Components
export const StyDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => (props.screenWidth > 750 ? "2rem" : "5rem")};
  padding: 5vw;
  .GridCard {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    align-self: flex-start;
    width: auto;
  }
  .titulo {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    display: flex;
    width: auto;
    align-items: center;
    align-self: flex-start;
    cursor: pointer;
    svg {
      margin-left: 1rem;
      font-size: 2rem;
    }
  }
  .divider {
    margin: 2rem 0;
    width: 80%;
    align-self: flex-start;
  }
  .pagIndex {
    margin-top: 5rem;
  }
`;

export const DividerSty = styled(motion.div)`
  width: 80%;
  height: 1rem;
  border-bottom: 0.2rem solid #84c887;
  border-radius: 5%;
`;
