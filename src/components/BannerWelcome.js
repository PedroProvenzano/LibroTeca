import React, { useState } from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
// Styled
import styled from "styled-components";
// Framer motion
import { motion } from "framer-motion";
import { h2Anim, container } from "../animation";
// Frases
import Phrases from "../phrases";
// Redux
import { useSelector } from "react-redux";

const BannerWelcome = () => {
  const windowSizeData = useSelector((state) => state.windowSize);
  const [phrase, setPhrase] = useState(
    Phrases[Math.floor(Math.random() * Phrases.length)]
  );
  return (
    <StyDiv
      screenWidth={windowSizeData.payload ? windowSizeData.payload.width : ""}
      variants={container}
      className="container"
      initial="hidden"
      animate="show"
    >
      <motion.div className="item" variants={h2Anim}>
        <Typography gutterBottom variant="h1" component="h2">
          ¡Bienvenido!
        </Typography>
      </motion.div>
      <motion.div className="item" variants={h2Anim}>
        <Typography gutterBottom variant="subtitle2" component="h3">
          {`"${phrase}"`}
        </Typography>
      </motion.div>
    </StyDiv>
  );
};

const StyDiv = styled(motion.div)`
  width: 100vw;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: ${(props) => (props.screenWidth > 750 ? "6vw" : "15vw")};
    font-weight: 800;
    font-family: "Josefin Sans", sans-serif;
  }
  h3 {
    text-align: center;
    font-style: italic;
    font-weight: 400;
    width: ${(props) => (props.screenWidth > 750 ? "45vw" : "80vw")};
  }
`;

export default BannerWelcome;
