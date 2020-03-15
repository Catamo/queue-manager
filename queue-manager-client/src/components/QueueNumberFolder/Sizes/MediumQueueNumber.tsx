import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import callout from "../../../assets/Callout.jpg";

export default function MediumQueueNumber() {
  return (
    <Card className="QueueNumber medium" elevation={3}>
      <CardMedia
        className="cover"
        image={callout}
        title="Live from space album cover"
      />
      <div className="details">
        <CardContent className="content">
          <Typography component="h4" variant="h4">
            G-281
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
