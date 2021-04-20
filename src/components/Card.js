import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// Redux
import { useSelector } from "react-redux";

export default function MediaCard({ title, image, link, subtitulo, autor }) {
  const windowSizeData = useSelector((state) => state.windowSize);
  const useStyles = makeStyles({
    root: {
      maxWidth: 445,
      minWidth: (props) => (props.screenWidth > 750 ? 400 : 200),
      height: 380,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: windowSizeData.payload.width > 750 ? "auto" : "90vw",
    },
    media: {
      height: 200,
    },
  });
  const classes = useStyles({
    screenWidth: windowSizeData.payload ? windowSizeData.payload.width : "",
  });

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {subtitulo.lenght > 4 ? subtitulo : ""}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Por ${autor}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => {
            window.open(link);
          }}
          size="small"
          color="primary"
        >
          Descargar
        </Button>
      </CardActions>
    </Card>
  );
}
