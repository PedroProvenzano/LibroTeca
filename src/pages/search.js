import React from "react";

// Redux
import { useSelector } from "react-redux";
// Material UI
import { Grid } from "@material-ui/core";
// Components
import MediaCard from "../components/Card";
// Styled comp
import { StyDiv, DividerSty } from "../style";
// Framer Motion
import { motion } from "framer-motion";
import { DividerAnim, CardAnim, h2Anim } from "../animation";
// Utility
import { MayusMaker } from "../Utility";
// uuid
import { v4 as uuidv4 } from "uuid";

const Search = () => {
  const booksData = useSelector((state) => state.libros);
  const searchWord = useSelector((state) => state.buscar);
  const windowSizeData = useSelector((state) => state.windowSize);
  let filterData = [];
  let filterDataTitle;
  let filterDataAutor;
  if (booksData.payload !== undefined && searchWord !== null) {
    filterDataTitle = booksData.payload.filter((book) =>
      book.titulo.toLowerCase().includes(searchWord.payload.toLowerCase())
    );
    filterDataTitle.map((book) => filterData.push(book));
    filterDataAutor = booksData.payload.filter((book) =>
      book.autor.toLowerCase().includes(searchWord.payload.toLowerCase())
    );
    filterDataAutor.map((book) => filterData.push(book));
  }
  return (
    <StyDiv>
      <motion.h2
        variants={h2Anim}
        initial="hidden"
        animate="show"
        className="titulo"
      >
        {MayusMaker(searchWord.payload)}
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
        direction={windowSizeData.payload.width > 750 ? "row" : "column"}
        alignItems="flex-start"
        spacing={1}
      >
        {filterData &&
          filterData.map((book) => {
            return (
              <Grid item xs key={uuidv4()}>
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
};

export default Search;
