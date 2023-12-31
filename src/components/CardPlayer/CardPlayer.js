import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardPlayer = ({ player }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={player.img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {player.player}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {player.position} | {player.number}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardPlayer;
