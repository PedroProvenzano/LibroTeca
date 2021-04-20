import React, { useState } from "react";
// Redux
import { useSelector } from "react-redux";
// Router
import { useHistory } from "react-router-dom";
// Material UI
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
// Components
import MediaCard from "../components/Card";
// Styled comp
import { StyDiv, DividerSty } from "../style";
// Framer Motion
import { motion } from "framer-motion";
import { DividerAnim, CardAnim, h2Anim } from "../animation";
// Utility
import { MayusMaker, pasarPagina } from "../Utility";
// uuid
import { v4 as uuidv4 } from "uuid";

const Category = () => {
  const [fromTo, setFromTo] = useState({ from: 0, to: 10 });
  const booksData = useSelector((state) => state.libros);
  const windowSizeData = useSelector((state) => state.windowSize);
  const history = useHistory();
  const url = history.location.pathname;
  let filterData;
  let Pag = {
    numPages: 0,
  };
  if (booksData.payload !== undefined) {
    filterData = booksData.payload.filter((book) =>
      book.genero.includes(url.slice(10))
    );
    Pag.numPages = Math.ceil(filterData.length / 10);
  }

  const SetPageHandler = (event, page) => {
    const [fromNew, toNew] = pasarPagina(
      page,
      Pag.numPages,
      10,
      filterData.length
    );
    setFromTo({ from: fromNew, to: toNew });
  };
  return (
    <StyDiv
      screenWidth={windowSizeData.payload ? windowSizeData.payload.width : ""}
    >
      <motion.h2
        variants={h2Anim}
        initial="hidden"
        animate="show"
        className="titulo"
      >
        {MayusMaker(url.slice(10))}
      </motion.h2>
      <DividerSty
        variants={DividerAnim}
        initial="hidden"
        animate="show"
        className="divider"
      ></DividerSty>
      <Grid
        container
        justify="center"
        direction={
          windowSizeData.payload
            ? windowSizeData.payload.width > 750
              ? "row"
              : "column"
            : ""
        }
        alignItems="flex-start"
        spacing={1}
      >
        {/* Filtrar para paginacion */}
        {filterData &&
          filterData.slice(fromTo.from, fromTo.to).map((book) => {
            return (
              <Grid className="GridCard" item xs key={uuidv4()}>
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
      <Pagination
        onChange={SetPageHandler}
        className="pagIndex"
        count={Pag.numPages}
        color="primary"
      />
    </StyDiv>
  );
};

export default Category;
