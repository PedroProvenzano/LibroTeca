import React from "react";
// Material UI
import { Grid } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// Framer Motion
import { motion } from "framer-motion";
import { DividerAnim, CardAnim, h2Anim } from "../animation";
// Redux
import { useSelector } from "react-redux";
// Router
import { Link } from "react-router-dom";
// Components
import MediaCard from "./Card";
// Styled comp
import { StyDiv, DividerSty } from "../style";
// Utility
import { MayusMaker } from "../Utility";
// uuid
import { v4 as uuidv4 } from "uuid";

export default function CenteredGrid({ title }) {
  const booksData = useSelector((state) => state.libros);
  const windowSizeData = useSelector((state) => state.windowSize);
  let filterData;
  if (booksData.payload !== undefined) {
    filterData = booksData.payload.filter((book) =>
      book.genero.includes(title)
    );
  }
  return (
    <StyDiv>
      <Link to={`/category/${title}`} style={{ textDecoration: "none" }}>
        <motion.h2
          variants={h2Anim}
          initial="hidden"
          animate="show"
          className="titulo"
        >
          {MayusMaker(title)} <ChevronRightIcon />
        </motion.h2>
      </Link>
      <DividerSty
        variants={DividerAnim}
        initial="hidden"
        animate="show"
        className="divider"
      ></DividerSty>
      <Grid
        container
        justify="center"
        direction={windowSizeData.payload.width > 750 ? "row" : "column"}
        alignItems="center"
        spacing={1}
      >
        {filterData &&
          filterData.slice(0, 4).map((book) => {
            return (
              <Grid item alignItems="center" justify="center" xs key={uuidv4()}>
                <motion.div variants={CardAnim} initial="hidden" animate="show">
                  <MediaCard
                    title={book.titulo}
                    image={book.portada}
                    link={book.link1}
                    subtitulo={book.subtitulo}
                    autor={book.autor}
                  />
                </motion.div>
              </Grid>
            );
          })}
      </Grid>
    </StyDiv>
  );
}
