import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import callout from "../../../assets/Callout.jpg";

export default function LargeQueueNumber() {
  return (
    <Card className="QueueNumber large" elevation={4}>
      <CardMedia
        className="cover"
        image={callout}
        title="Live from space album cover"
      />
      <div className="details">
        <CardContent className="content">
          <Typography component="h1" variant="h1">
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
